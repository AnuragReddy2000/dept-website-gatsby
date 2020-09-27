import React from 'react';
import {PhDAlumniList} from '../../models/AlumniList';
import {MScAlumniList} from '../../models/AlumniList';
import ProfileView from '../../components/profileview/profileview';
import Carousel from '../../components/carousel/carousel';
import {BsDot} from 'react-icons/bs';
import './alumni.css';
import {Helmet} from 'react-helmet';

class AlumniPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Helmet>
                    <title>Dmath - Alumni</title>
                </Helmet>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>PhD Alumni:</p>
                </div>
                <div className='aluminfoContent'>
                    {PhDAlumniList.map(value => <ProfileView Name={value.name} email={value.email} Area={value.area} supervisor={'Supervisor: ' + value.mentor} Image={value.image} extraDetails={value.currentPos=="" ? [] : ['Current Position: ' + value.currentPos]}/>)}
                </div>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>M.Sc Alumni:</p>
                </div>

                {MScAlumniList.map(value => <div className='AlumniBatch'>
                    {value.grpImage=="" ? null : <Carousel images={[value.grpImage]} imagesNum={1}/>}
                    <div className='AlumnibatchTitle'>
                        <p style={{margin: '5px', marginLeft: '20px', padding: '0px', color: 'darkblue', fontSize: 'larger'}}>{value.batch + ' Batch:'}</p>
                    </div>
                    <div className='AlumniList'>
                        {value.students.map(person => <div className='AlumniName'><BsDot size={20}/><p style={{width:'95%'}}><i>{person.name}</i></p></div>)}
                    </div>    
                </div>)}
                <div>
                    <p>More information regarding the Alumni can be found <a href='https://docs.google.com/spreadsheets/d/1eD041NjuL71c4_bS6W1f-9rbgvfPucSxbZ5tpKTr8rs/edit?usp=sharing' target='_blank'>here</a></p>
                </div>
            </div>
        )
    }
}

export default AlumniPage;