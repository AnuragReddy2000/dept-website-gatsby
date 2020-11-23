import React from "react"
import create_json_display from "../../components/json_display/display_util"
import firebase from "firebase"

interface PubsPageState{
    currentPage: string,
    data: Object,
    isPageSelected: boolean,
    schemas: Object,
    isUserLoggedIn: boolean
    app: firebase.app.App
}

interface PubsPageProps{}

class PubsPage extends React.Component<PubsPageProps,PubsPageState>{
    constructor(props: PubsPageProps,state: PubsPageState){
        super(props,state);
        this.state = {
            currentPage: "",
            data:{},
            isPageSelected: false,
            schemas:{},
            app: (!firebase.apps.length)? firebase.initializeApp({
                apiKey: "AIzaSyDCbxvztZKuY7jT2-QrjYYja4Pis_nvjgw",
                authDomain: "websitetrial-751df.firebaseapp.com",
                databaseURL: "https://websitetrial-751df.firebaseio.com",
                projectId: "websitetrial-751df",
                storageBucket: "websitetrial-751df.appspot.com",
                messagingSenderId: "753007707796",
                appId: "1:753007707796:web:c47ac33bf9e0e0a34dd681"
            }):firebase.apps[0],
            isUserLoggedIn: (firebase.auth().currentUser) ? false:true,
        }
    }

    login = () =>{
        let updateLogStatus = () => {this.setState({isUserLoggedIn: true})}
        let provider = new firebase.auth.GoogleAuthProvider();
        this.state.app.auth().signInWithPopup(provider).then(function(result) {
            updateLogStatus();
            alert("Welcome, " + result.user?.displayName)
        }).catch(function(error) {
            alert("Oops... login failed. Please try again")
        });
    }

    logout = () => {
        let updateLogStatus = () => {this.setState({isUserLoggedIn: false})}
        this.state.app.auth().signOut().then(function(result){
            updateLogStatus()
            alert("Sucessfully logged out")
        }).catch(function(error){alert("Oops... failed to logout")})
    }

    async componentDidMount(){
        const response = await fetch("/data/schemas.json");
        const body = await response.json() as Object;
        this.setState({
            schemas: body
        })
    }

    async getPage(page:string) {
        if(page===""){
            this.setState({
                currentPage:page,
                isPageSelected: false
            }) 
        }
        else{
            let displayData = (body: object) => {
                this.setState({
                    currentPage:page,
                    data: body,
                    isPageSelected: true
                }) 
            }
            let url = "/data/" + page + ".json"
            /*
            this.state.app.firestore().collection("data").doc(page).get().then(function(doc){
                //displayData(doc?doc.data() as Object:{});
                console.log(doc?doc.data():{})
            }).catch(function(error){
                alert("Oops... something went wrong. Try again")
                console.log(error)
            })
            */
            const response = await fetch(url);
            const body = await response.json() as Object;
            this.setState({
                currentPage:page,
                data: body,
                isPageSelected: true
            }) 
            console.log(body)
        }
    }

    saveChanges=(page_data:Object)=>{
        this.state.app.firestore().collection('data').doc(this.state.currentPage).set(page_data).then(function(result){
            alert("Sucessfully saved changes. Thank you!")
        }).catch(function(error){
            alert("Oops... Sorry, unable to save changes. Try again")
        })
    }

    changeJSON = (new_data: Object) => {
        this.setState({
            data : new_data
        })
    }

    render(){
        let pub = this.state.data
        return (
            <div>
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
                            <option value="phd_admissions">PhD Admissions page</option>
                            <option value="postdoc">Post Doctoral Candidates</option>
                            <option value="publications">Publications</option>
                            <option value="seminars">Seminars</option>
                        </select>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",width:"95%",justifyContent:"flex-end"}}>
                        {<button onClick={()=>{(this.state.isUserLoggedIn)?this.logout():this.login()}} style={{margin:"3px"}}>{(this.state.isUserLoggedIn)? "Log out":"Log in"}</button>}
                        {this.state.isPageSelected? <button title='Submit' onClick={()=>{this.saveChanges(pub as Object)}} style={{alignSelf:"flex-end", margin:"3px"}}>Submit changes</button> : null}
                    </div>
                </div>
                <div style={{backgroundColor:"rgb(250,250,250)"}}>
                    {this.state.isPageSelected? create_json_display(pub,this.state.schemas[this.state.currentPage as keyof Object],()=>{this.changeJSON(pub)}) : null}
                </div>
            </div>
        )
    }
}

export default PubsPage;