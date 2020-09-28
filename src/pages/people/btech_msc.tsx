import React from 'react';
import {BtechAndMScStudents} from '../../models/BtechAndMScStudents';
import './btech_msc.css';
import Carousel from '../../components/carousel/carousel';
import {BsDot} from 'react-icons/bs';
import {Helmet} from 'react-helmet';

class BtechAndMScPage extends React.Component{

    render(){
        return(
            <div className='btechAndMScPage'>
                <Helmet>
                    <title>DMath - BTech and MSc</title>
                </Helmet>
                <div style={{width: '100%', boxSizing: 'border-box', margin: '3px', padding: '5px'}}>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>B.Tech and M.Sc students:</p>
                </div>
                {BtechAndMScStudents.map(value => <div className='studentsBatch'>
                    <Carousel images={[value.grpImage]} imagesNum={1}/>
                    <div className='batchTitle'>
                        <p style={{margin: '5px', marginLeft: '20px', padding: '0px', color: 'darkblue', fontSize: 'larger'}}>{value.batch + ' Batch:'}</p>
                    </div>
                    <div className='studentsList'>
                        {value.students.map(person => <div className='studentName'><BsDot size={20}/><p style={{width:'95%'}}><i>{person.name}</i></p></div>)}
                    </div>    
                </div>)}
            </div>
        )
    }
}

export default BtechAndMScPage;