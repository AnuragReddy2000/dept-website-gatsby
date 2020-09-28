import React from 'react';
import {Helmet} from 'react-helmet';

class StudentSeminarPage extends React.Component{

    render(){

        return(
            <div style={{height:'88vh', width:'100%', display:'flex', flexDirection:'column',justifyContent:'flex-start'}}>
                <Helmet>
                    <title>DMath - Student Seminars</title>
                </Helmet>
                <div style={{width: '100%', height:'45px', marginBottom:'1vh',backgroundColor:'rgb(250,250,250)',display:'flex', flexDirection:'row',justifyContent:'flex-start', border:'1px solid rgb(170, 170, 170)'}}>
                    <p style={{fontSize:'x-large', color:'darkblue',alignSelf:'center',marginLeft:'10px'}}>Student Seminars:</p>
                </div>
                <div style={{height:'100%', width:'100%',boxSizing:'border-box'}}>
                    <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRPn7GD0p2zuH6hVpsyu-7QUSVm8_7X6BrNZWFUEoUPi0m3ZcHhZrC32KNa5DY5RzR4dXrpm5vg7CHI/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" style={{height:'100%', width:'100%',boxSizing:'border-box'}}></iframe>
                </div>
            </div>
        )
    }
}

export default StudentSeminarPage;