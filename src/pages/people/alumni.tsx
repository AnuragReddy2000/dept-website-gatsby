import React from 'react';
import ProfileView from '../../components/profileview/profileview';
import Carousel from '../../components/carousel/carousel';
import {BsDot} from 'react-icons/bs';
import './alumni.css';
import {Helmet} from 'react-helmet';
import {FirebaseUtils} from '../../utils/firebase_util'

interface AlumniPageProps{}

interface AlumniPageState{
    phdAlumniList: Phd[];
    mscAlumniList: Batch[];
    isLoading: boolean;
}

interface Phd{
    name: string;
    image: string;
    area: string;
    mentor: string;
    email: string;
    currentPos: string;
}

interface Batch{
    batch: string;
    grpImage: string;
    students: string[];
}

class AlumniPage extends React.Component<AlumniPageProps,AlumniPageState>{

    constructor(props: AlumniPageProps, state: AlumniPageState){
        super(props,state);
        this.state={
            isLoading:true,
            phdAlumniList:[],
            mscAlumniList:[]
        }
    }

    async componentDidMount(){
        const body = await FirebaseUtils.getPageData("alumni");
        this.setState({
            phdAlumniList: body.PhDAlumniList,
            mscAlumniList: body.MScAlumniList,
            isLoading: false
        })
    }

    render(){
        return(
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Helmet>
                    <title>DMath - Alumni</title>
                </Helmet>
                {this.state.isLoading ? <p style={{textAlign:'center',  marginBottom:'40vh',marginTop:'35vh' , color:'darkgray'}}><i>loading...</i></p> 
                :<div style={{width:'100%'}}>
                    <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                        <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>PhD Alumni:</p>
                    </div>
                    <div className='aluminfoContent'>
                        {this.state.phdAlumniList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={'Supervisor: ' + value.mentor} Image={value.image} extraDetails={value.currentPos=="" ? [] : ['Current Position: ' + value.currentPos]}/>)}
                    </div>
                    <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                        <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>M.Sc Alumni:</p>
                    </div>

                    {this.state.mscAlumniList.map(value => <div className='AlumniBatch'>
                        {value.grpImage=="" ? null : <Carousel images={[value.grpImage]} imagesNum={1}/>}
                        <div className='AlumnibatchTitle'>
                            <p style={{margin: '5px', marginLeft: '20px', padding: '0px', color: 'darkblue', fontSize: 'larger'}}>{value.batch + ' Batch:'}</p>
                        </div>
                        <div className='AlumniList'>
                            {value.students.map(person => <div className='AlumniName'><BsDot size={20}/><p style={{width:'95%'}}><i>{person}</i></p></div>)}
                        </div>    
                    </div>)}
                </div>}
                <div>
                    <p>More information regarding the Alumni can be found <a href='https://docs.google.com/spreadsheets/d/1eD041NjuL71c4_bS6W1f-9rbgvfPucSxbZ5tpKTr8rs/edit?usp=sharing' target='_blank'>here</a></p>
                </div>
            </div>
        )
    }
}

export default AlumniPage;