import React from 'react';
import ProfileView from '../../components/profileview/profileview';
import {DoctoralList} from '../../models/DoctoralList';
import './doctoral.css';

class DoctoralPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Doctoral Students:</p>
                </div>
                <div className='docinfoContent'>
                    {DoctoralList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={'Supervisor: ' + value.mentor} Image={value.image} link={value.link}/>)}
                </div>
            </div>
        )
    }
}

export default DoctoralPage;