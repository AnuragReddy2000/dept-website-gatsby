import React from 'react';
import InfoView from '../../components/infoview/infoview';
import './faculty.css';
import {Helmet} from 'react-helmet';

class FacultyRecruitment extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - Faculty Recruitments</title>
                </Helmet>
                <InfoView title='Faculty Recruitment:' titleColor='darkblue' info={['The Department of Mathematics at IIT Hyderabad invites applications from those with a consistently good research track record and with expertise in complementary areas to that currently available in the department.',
                    'Last date for receiving applications for the current recruitment is 31-05-2020. Applications received after this deadline will be considered for the next recruitment.']}
                    link='https://www.iith.ac.in/careers/' linkText='To apply online, click here'
                />
                <div className='contactUsparagraph'>
                    <p style={{margin: '4px', padding: '0px', fontSize:'large'}}>For queries regarding Faculty recruitment contact,</p>
                    <p className='toolTip'>Dr. G. Ramesh <span className='toolTipText'><i> rameshg@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. P. Anantha Lakshmi Narayana <span className='toolTipText'><i> ananth@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. V. G. Narasimha Kumar <span className='toolTipText'><i> narasimha@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. Satya Prakash Singh <span className='toolTipText'><i> spsingh@math.iith.ac.in</i></span></p>
                </div>
            </div>
        )
    }
}

export default FacultyRecruitment;