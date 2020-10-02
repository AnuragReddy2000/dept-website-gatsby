import React from 'react';
import ProfileView from '../../components/profileview/profileview';
import './doctoral.css';
import {Helmet} from 'react-helmet';

interface DoctoralPageState{
    isLoading: boolean;
    data: Doctoral[];
}

interface DoctoralPageProps{}

interface Doctoral{
    name: string;
    image: string;
    area: string;
    mentor: string;
    email: string;
    link: string;
}

class DoctoralPage extends React.Component<DoctoralPageProps,DoctoralPageState>{
    constructor(props: DoctoralPageProps, state: DoctoralPageState){
        super(props,state);
        this.state={
            isLoading:true,
            data:[]
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/doctoral.json");
        const body = await response.json();
        this.setState({
            data: body,
            isLoading:false
        })
    }

    render(){
        return(
            <div style={{width: '100%'}}>
                <Helmet>
                    <title>DMath - PhD</title>
                </Helmet>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Doctoral Students:</p>
                </div>
                <div className='docinfoContent'>
                    {this.state.isLoading ? <p style={{textAlign:'center', position:'fixed', top:'50vh', right:'40vw', color:'darkgray'}}>loading...</p> 
                    : this.state.data.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={'Supervisor: ' + value.mentor} Image={value.image} link={value.link}/>)}
                </div>
            </div>
        )
    }
}

export default DoctoralPage;