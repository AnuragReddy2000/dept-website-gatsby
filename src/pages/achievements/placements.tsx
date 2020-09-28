import React from 'react';
import InfoView from '../../components/infoview/infoview';
import {Helmet} from 'react-helmet';

class Placements extends React.Component{

    render(){
        return(
            <div style={{height:'100%', width:'100%'}}>
                <Helmet>
                    <title>DMath - Placements</title>
                </Helmet>
                <InfoView title='Placements :' titleColor='darkblue' info={["The Department of Mathematics started the B. Tech in Maths and Computing program in the year 2017-18 with a batch size of 10. The first batch is all set to graduate in the academic year 2021.  The placement session for the first batch is scheduled in December 2020. We are glad to announce that 3 of our students have already received pre-placement offers (PPOs) from the companies - Goldman Sachs, Microsoft (as of 27th September 2020)."]}/>
                <InfoView title='Internship Recruiters for 2017-18 batch :' titleColor='darkblue' info={[" • Great Four Systems \n • Goldman Sachs \n • Honeywell \n • Microsoft \n • Samsung R&D Delhi \n • UST Global"]}/>
                <InfoView title='Internship Recruiters for 2018-19 batch :' titleColor='darkblue' info={[" • Adobe \n • Flipkart \n • Microsoft \n • Salesforce \n • Samsung R&D Bangalore"]} rightFooter='- As of 27th September 2020'/>
                <InfoView title='Contact:' titleColor='darkblue' info={["Dr Sameen Naqvi \n Faculty Placement Coordinator \n Department of Mathematics \n IIT Hyderabad \n Email : sameen@math.iith.ac.in"]}/>
            </div>
        )
    }
} 
export default Placements;