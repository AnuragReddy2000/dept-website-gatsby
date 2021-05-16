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
                <InfoView title='Faculty Recruitment:' titleColor='darkblue' info={[
                    'The Department of Mathematics, IIT Hyderabad invites applications from Indian nationals who are exceptionally bright and motivated, with an established record of independent, high-quality research and commitment to teaching for positions at all levels.  For the present round of recruitment, the applications received on or before 31st March 2021 will be considered.']}
                links={[{
                    link: "https://faculty.recruitment.iith.ac.in/",
                    linktext: "To apply for a faculty position, please visit here"
                }]}
                />
                <div className='contactUsparagraph'>
                    <p style={{margin: '4px', padding: '0px', fontSize:'large'}}>For any further queries, please contact one of the following faculty search committee (FSC) members:</p>
                    <p className='toolTip'>Dr. D Sukumar <span className='toolTipText'><i> suku@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. Bhakti Bhusan Manna <span className='toolTipText'><i> bbmanna@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. Amit Tripati <span className='toolTipText'><i> amittr@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. J Balasubramaniam <span className='toolTipText'><i> jbala@math.iith.ac.in</i></span></p>
                    <p className='toolTip'>Dr. Satya Prakash Singh <span className='toolTipText'><i> spsingh@math.iith.ac.in</i></span></p>
                    <p className='toolTip'><b>Convenor FSC:  Dr. J Balasubramaniam</b></p>
                </div>
            </div>
        )
    }
}

export default FacultyRecruitment;