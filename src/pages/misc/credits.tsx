import React from 'react';
import InfoView from '../../components/infoview/infoview';
import './credits.css';
import { BsDot } from 'react-icons/bs';
import {Helmet} from 'react-helmet';

class Credits extends React.Component{

    render(){
        return(
            <div style={{width: '100%', marginTop:'5px'}}>
                <Helmet>
                    <title>DMath - Credits</title>
                </Helmet>
                <InfoView title='Our thanks go to...' titleColor='darkblue' info={['All the people who have directly and indirectly helped in the making of this website.', 'We welcome any comments / observations / suggestions.']}/>
                <div className='creditsNames'>
                    <p style={{color: 'darkblue', fontSize: 'x-large', margin:'10px', padding: '0px'}}>Website: Design and Development</p>
                    <p style={{margin: '8px', padding: '0px'}}><BsDot/> Mr. Anurag Reddy Karri</p>
                    <p style={{margin: '8px', padding: '0px'}}><BsDot/> Ms. Srujana B</p>
                </div>
                <div className='creditsNames'>
                    <p style={{color: 'darkblue', fontSize: 'x-large', margin:'10px', padding: '0px'}}>Website: Maintenance</p>
                    <p style={{margin: '8px', padding: '0px'}}><BsDot/> Mr. Mahaboob Moonavath</p>
                </div>
                <div className='creditsNames'>
                    <p style={{color: 'darkblue', fontSize: 'x-large', margin:'10px', padding: '0px'}}>Website: Logo design</p>
                    <p style={{margin: '8px', padding: '0px'}}><BsDot/> Dr. Sayantan Mandal</p>
                </div>
            </div>
        )
    }
}

export default Credits;