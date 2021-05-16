import React from "react";
import create_json_display from "../../utils/display_util";
import {FirebaseUtils} from "../../utils/firebase_util";
import {Helmet} from 'react-helmet';

interface ConsolePageState{
    currentPage: string,
    data: Object,
    isPageSelected: boolean,
    schemas: Object,
    isUserLoggedIn: boolean
}

interface ConsolePageProps{}

class ConsolePage extends React.Component<ConsolePageProps,ConsolePageState>{
    constructor(props: ConsolePageProps,state: ConsolePageState){
        super(props,state);
        this.state = {
            currentPage: "",
            data:{},
            isPageSelected: false,
            schemas:{},
            isUserLoggedIn: false,
        }
    }

    login = () =>{
        let updateLogStatus = () => {this.setState({isUserLoggedIn: true})}
        FirebaseUtils.login(updateLogStatus)
    }

    logout = () => {
        let updateLogStatus = () => {this.setState({isUserLoggedIn: false})}
        FirebaseUtils.logout(updateLogStatus)
    }

    async componentDidMount(){
        const response = await FirebaseUtils.getPageData("schemas")
        this.setState({
            schemas: response
        })
        /*
        const response = await fetch("/data/schemas.json");
        const body = await response.json() as Object;
        this.setState({
            schemas: body
        })
        */
        window.addEventListener("beforeunload",(event)=>{this.logout()})
    }

    async getPage(page:string) {
        if(page===""){
            this.setState({
                currentPage:page,
                isPageSelected: false
            }) 
        }
        else{
            const response = await FirebaseUtils.getPageData(page)
            this.setState({
                currentPage:page,
                data: response,
                isPageSelected: true
            }) 
            /*
            let url = "/data/" + page + ".json"
            const response = await fetch(url);
            const body = await response.json() as Object;
            this.setState({
                currentPage:page,
                data: body,
                isPageSelected: true
            }) 
            */
        }
    }

    saveChanges=(page_data:Object)=>{
        if(this.state.isUserLoggedIn){
            if(confirm("Are you sure you want to submit the following changes?")){
                FirebaseUtils.saveChanges(this.state.currentPage,page_data)
            }
        }
        else{
            alert("Please login with your IITH account and then make your changes")
        }
    }

    changeJSON = (new_data: Object) => {
        this.setState({
            data : new_data
        })
    }

    render(){
        let pub = JSON.parse(JSON.stringify(this.state.data))
        return (
            <div>
                <Helmet>
                    <title>DMath - Management Console</title>
                </Helmet>
                <div style={{width: '100%', marginBottom:'1vh',backgroundColor:'rgb(250,250,250)',display:'flex', flexDirection:"column",justifyContent:"flex-start", alignItems:"center", border:'1px solid rgb(170, 170, 170)', textAlign:"center"}}>
                    <p style={{fontSize:'x-large', color:'darkblue',alignSelf:'center',textAlign:"center"}}>Data Management console</p>
                    <div style={{display:"flex",flexDirection:"row", marginBottom:"10px"}}>
                        <div>Please select a page to edit: </div>
                        <select style={{marginLeft:"10px"}} value={this.state.currentPage} onChange={(event)=>{this.getPage(event.target.value)}}>
                            <option value=""></option>
                            <option value="alumni">Alumni</option>
                            <option value="announcements">Announcements and Events</option>
                            <option value="btech_msc">Btech and MSc students</option>
                            <option value="carousel">Carousel images</option>
                            <option value="doctoral">Doctoral Students</option>
                            <option value="faculty">Faculty</option>
                            <option value="fundedprojects">Funded Projects</option>
                            <option value="generalugcourses">General UG Courses</option>
                            <option value="postdoc">Post Doctoral Candidates</option>
                            <option value="publications">Publications</option>
                            <option value="seminars">Seminars</option>
                            <option value="phd_admissions">PhD Admissions Page</option>
                            <option value="page_routes">Page Navigation</option>
                        </select>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",width:"95%", justifyContent:"flex-end"}}>
                        {(this.state.isUserLoggedIn)? <div style={{margin:"3px",alignSelf:"flex-start",textAlign:'left', width:"100%"}}>Current User : {FirebaseUtils.getUser().name} ({FirebaseUtils.getUser().email})</div>:null}
                        {<button onClick={()=>{(this.state.isUserLoggedIn)?this.logout():this.login()}} style={{margin:"3px",alignSelf:"flex-end", width:"80px"}}>{(this.state.isUserLoggedIn)? "Log out":"Log in"}</button>}
                        {this.state.isPageSelected? <button title='Submit' onClick={()=>{this.saveChanges(pub)}} style={{alignSelf:"flex-end", margin:"3px",width:"140px"}}>Submit changes</button> : null}
                    </div>
                </div>
                <div style={{backgroundColor:"rgb(250,250,250)"}}>
                    {this.state.isPageSelected? create_json_display(pub,this.state.schemas[this.state.currentPage as keyof Object],()=>{this.changeJSON(pub)}) : null}
                </div>
            </div>
        )
    }
}

export default ConsolePage;