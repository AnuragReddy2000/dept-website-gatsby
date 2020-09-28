import React from 'react';
import InfoView from '../../components/infoview/infoview';
import {FacultyDataList} from '../../models/FacultyDataList';
import ProfileView from '../../components/profileview/profileview';
import './faculty.css';
import {Helmet} from 'react-helmet';

class FacultyPage extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - Faculty</title>
                </Helmet>
                <InfoView title='Faculty:' titleColor='darkblue' info={['Our Department currently has 16 faculty members with interests ranging from pure, applied, and computational mathematics. ']}/>
                <div className='infoContent'>
                    {FacultyDataList.map(value => <ProfileView Name={value.name} Designation={value.data.designation} Area={value.data.areas} email={value.data.email} RoomNo={'Office: ' + value.data.roomNo} phone={'Phone: '+value.data.phone} link={value.data.link} Image={value.data.image}/>)}
                </div>
            </div>
        )
    }
}

export default FacultyPage;