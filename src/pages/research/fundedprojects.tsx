import React from 'react';
import TableView from '../../components/tableview/tableview';
import './fundedprojects.css';
import {Helmet} from 'react-helmet';
import {FirebaseUtils} from '../../utils/firebase_util'

interface FundedProject{
    title:string;
    prof:string;
    agency:string;
    duration:string;
    openings:string
}

interface FundedProjectsState{
    projects: FundedProject[];
    isLoading: boolean;
}

interface FundedProjectsProps{}

class FundedProjectsPage extends React.Component<FundedProjectsProps,FundedProjectsState>{
    constructor(props:FundedProjectsProps,state:FundedProjectsState){
        super(props,state);
        this.state={
            projects:[],
            isLoading:true
        }
    }

    async componentDidMount(){
        const body = await FirebaseUtils.getPageData("fundedprojects") as {'fundedprojects':FundedProject[]};
        this.setState({
            projects: body.fundedprojects,
            isLoading: false
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
                {this.state.isLoading ? <p style={{textAlign:'center', position:'fixed', top:'50vh',right:'45vw', color:'darkgray'}}><i>loading...</i></p> 
                : this.state.projects.map(value => <div><TableView title={value.title} speaker={value.prof} dateVenue={(value.openings==='Yes') ? "Open": "Openings Closed"} content={'Grant Agency: ' + value.agency + '\n' + 'Time Period: ' + value.duration} overrideDateVenueWidth='40%'/></div>)}
            </div>
        )
    }
}

export default FundedProjectsPage;