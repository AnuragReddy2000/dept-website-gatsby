import React from 'react';
import ProfileView from '../../components/profileview/profileview';
import Mahaboob from '../../images/people/staff/Mahaboob.jpg';
import './staff.css';

class StaffPage extends React.Component{

    render() {
        return (
            <div style={{width: '100%'}}>
                <p className='spTitle'>Administrative Personnel: </p>
                <div className='spInfoContent'>
                    <ProfileView Name='Mr. Mahaboob Moonavath' Image={Mahaboob} Designation='Executive Assistant' email='mahaboob.moonavath@admin.iith.ac.in' RoomNo='Room No.: A-718/B'/>
                </div>
            </div>
        )
    }
}

export default StaffPage;