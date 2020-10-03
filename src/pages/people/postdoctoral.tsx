import React from 'react';
import ProfileView from '../../components/profileview/profileview';
import './postdoctoral.css';
import {Helmet} from 'react-helmet';

interface PostDoctoralPageState{
    isLoading: boolean;
    postDocList: PostDoc[];
    formerPostDocList: PostDoc[];
}

interface PostDoctoralPageProps{}

interface PostDoc{
    name: string;
    image: string;
    email: string;
    area: string;
    mentor: string;
    stay: string;
    link: string;
}

class PostDoctoralPage extends React.Component<PostDoctoralPageProps,PostDoctoralPageState>{

    constructor(props: PostDoctoralPageProps, state: PostDoctoralPageState){
        super(props,state);
        this.state={
            isLoading:true,
            postDocList:[],
            formerPostDocList:[]
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/postdoc.json");
        const body = await response.json();
        this.setState({
            postDocList: body.PostDoctoral,
            formerPostDocList: body.FormerPostDoctoral,
            isLoading:false
        })
    }

    render(){
        return(
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Helmet>
                    <title>DMath - Post Doc</title>
                </Helmet>
                {this.state.isLoading ? <p style={{textAlign:'center', position:'fixed', top:'50vh',right:'45vw', color:'darkgray'}}><i>loading...</i></p> 
                : <div style={{width: '100%', height:'100%'}}>
                    {this.state.postDocList.length===0 ? null : <div style={{width:'100%'}}>
                        <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                            <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Post Doctoral Fellows:</p>
                        </div>
                        <div className='pdinfoContent'>
                            {this.state.postDocList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={'Mentor: ' + value.mentor} Image={value.image} periodOfStay={'Period of Stay: ' + value.stay} link={value.link}/>)}
                        </div>
                    </div>}
                    <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                        <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Former Post Doctoral Fellows:</p>
                    </div>
                    <div className='pdinfoContent'>
                        {this.state.formerPostDocList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={value.mentor} Image={value.image} periodOfStay={'Period of Stay: ' + value.stay} link={value.link}/>)}
                    </div>
                </div> 
                }
            </div>
        )
    }
}

export default PostDoctoralPage;