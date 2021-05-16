import React from 'react';
import ProfileView from '../../components/profileview/profileview';
import './staff.css';
import {Helmet} from 'react-helmet';

class StaffPage extends React.Component{

    render() {
        return (
            <div style={{width: '100%'}}>
                <Helmet>
                    <title>DMath - Staff</title>
                </Helmet>
                <p className='spTitle'>Administrative Personnel: </p>
                <div className='spInfoContent'>
                    <ProfileView Name='Mr. Mahaboob Moonavath' Image={"/images/people/staff/Mahaboob.jpg"} Designation='Executive Assistant' email='mahaboob.moonavath@admin.iith.ac.in' RoomNo='Room No.: A-718/B'/>
                </div>
                <p className='spTitle'>Technical Personnel: </p>
                <div className='spInfoContent'>
                    <ProfileView Name='Mr. Anand Velmurugan' Image={"/images/people/staff/AV.jpg"} Designation='Technical Superintendent' email='anand.v@math.iith.ac.in'/>
                </div>
            </div>
        )
    }
}

export default StaffPage;