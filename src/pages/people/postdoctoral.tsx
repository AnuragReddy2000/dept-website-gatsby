import React from 'react';
import {FormerPostDoctoralList, PostDoctoralList} from '../../models/PostDoctoralList';
import ProfileView from '../../components/profileview/profileview';
import './postdoctoral.css';
import {Helmet} from 'react-helmet';

class PostDoctoralPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                <Helmet>
                    <title>Dmath - Post Doc</title>
                </Helmet>
                {PostDoctoralList.length === 0 ? null : <div style={{width:'100%'}}>
                    <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                        <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Post Doctoral Fellows:</p>
                    </div>
                    <div className='pdinfoContent'>
                        {PostDoctoralList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={'Mentor: ' + value.mentor} Image={value.image} periodOfStay={'Period of Stay: ' + value.stay} link={value.link}/>)}
                    </div>
                </div>}
                <hr/>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Former Post Doctoral Fellows:</p>
                </div>
                <div className='pdinfoContent'>
                    {FormerPostDoctoralList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={value.mentor} Image={value.image} periodOfStay={'Period of Stay: ' + value.stay} link={value.link}/>)}
                </div>
            </div>
        )
    }
}

export default PostDoctoralPage;