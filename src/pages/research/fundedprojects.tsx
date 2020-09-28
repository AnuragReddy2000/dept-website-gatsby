import React from 'react';
import TableView from '../../components/tableview/tableview';
import './fundedprojects.css';
import {Helmet} from 'react-helmet';

interface FundedProject{
    title:string;
    prof:string;
    agency:string;
    duration:string;
    openings:string
}

interface FundedProjectsState{
    projects: FundedProject[];
}

interface FundedProjectsProps{}

class FundedProjectsPage extends React.Component<FundedProjectsProps,FundedProjectsState>{
    constructor(props:FundedProjectsProps,state:FundedProjectsState){
        super(props,state);
        this.state={
            projects:[]
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/fundedprojects.json");
        const body = await response.json();
        this.setState({
            projects: body as FundedProject[]
        })
    }

    render(){
        return(
            <div style={{width: '100%'}}>
                <Helmet>
                    <title>DMath - Funded Projects</title>
                </Helmet>
                <div className='FundedProjectsHeader'>
                    <p style={{margin: '0px', padding: '0px', color: 'darkblue', fontSize: 'x-large'}}>Funded Projects:</p>
                </div>
                {this.state.projects.map(value => <div><TableView title={value.title} speaker={value.prof} dateVenue={(value.openings==='Yes') ? "Open": "Openings Closed"} content={'Grant Agency: ' + value.agency + '\n' + 'Time Period: ' + value.duration} overrideDateVenueWidth='40%'/></div>)}
            </div>
        )
    }
}

export default FundedProjectsPage;