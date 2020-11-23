import React from 'react';
import InfoView from '../../components/infoview/infoview';
import ProfileView from '../../components/profileview/profileview';
import './faculty.css';
import {Helmet} from 'react-helmet';

interface Faculty{
    name: string;
    designation: string;
    areas: string;
    email: string;
    roomNo: string;
    image: string;
    link: string;
    phone: string;
}

interface FacultyPageState{
    facultyList: Faculty[];
    isLoading: boolean;
}

interface FacultyPageProps{}

class FacultyPage extends React.Component<FacultyPageProps,FacultyPageState>{

    constructor(props: FacultyPageProps, state: FacultyPageState){
        super(props,state);
        this.state={
            isLoading:true,
            facultyList:[]
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/faculty.json");
        const body = await response.json() as {"faculty": Faculty[]};
        this.setState({
            facultyList: body.faculty,
            isLoading: false
        })
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - Faculty</title>
                </Helmet>
                <InfoView title='Faculty:' titleColor='darkblue' info={['Our Department currently has 16 faculty members with interests ranging from pure, applied, and computational mathematics. ']}/>
                {this.state.isLoading ? <p style={{textAlign:'center', position:'fixed', top:'50vh', right:'45vw', color:'darkgray'}}><i>loading...</i></p> 
                :<div className='infoContent'>
                    {this.state.facultyList.map(value => <ProfileView Name={value.name} Designation={value.designation} Area={value.areas} email={value.email} RoomNo={'Office: ' + value.roomNo} phone={'Phone: '+value.phone} link={value.link} Image={value.image}/>)}
                </div>}
            </div>
        )
    }
}

export default FacultyPage;