import React from 'react';
import {FundedProjectsList} from '../../models/FundedProjectsList';
import TableView from '../../components/tableview/tableview';
import './fundedprojects.css';
import {Helmet} from 'react-helmet';

class FundedProjectsPage extends React.Component{
    
    render(){
        return(
            <div style={{width: '100%'}}>
                <Helmet>
                    <title>DMath - Funded Projects</title>
                </Helmet>
                <div className='FundedProjectsHeader'>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Funded Projects:</p>
                </div>
                {FundedProjectsList.map(value => <div><TableView title={value.title} speaker={value.prof} dateVenue={(value.openings==='Yes') ? "Open": "Openings Closed"} content={'Grant Agency: ' + value.agency + '\n' + 'Time Period: ' + value.duration} overrideDateVenueWidth='40%'/></div>)}
            </div>
        )
    }
}

export default FundedProjectsPage;