import React from 'react';
import InfoView from '../../components/infoview/infoview';
import './phd.css';
import {Helmet} from 'react-helmet';

interface PhDAdmissionsState{
    data: any,
    isLoading: boolean
}

interface PhDAdmissionsProps{}

class PhDAdmissions extends React.Component<PhDAdmissionsProps,PhDAdmissionsState>{
    constructor(props: PhDAdmissionsProps,state: PhDAdmissionsState){
        super(props,state);
        this.state = {
            isLoading : true,
            data : undefined
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/phd_admissions.json");
        const body = await response.json();
        this.setState({
            data : body,
            isLoading : false
        })
    }

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Helmet>
                    <title>DMath - PhD Admissions</title>
                </Helmet>
                {this.state.isLoading ? <div><p>loading...</p></div>
                    : this.state.data.map((item:any) => (item.type==="para")? <InfoView title={item.header} info={item.body} titleColor='darkblue' link={item.link} linkText={item.linktext}/> 
                        :<div className='phdAdmissionsMiddle'>
                            <p style={{color: 'darkblue', fontSize: 'x-large', marginBottom: '3px'}}>{item.header}</p>
                            {item.keyvals.map((keyval:any) => <p style={{marginBottom: '1.5px'}}>{keyval.name} <a href={keyval.link}>{keyval.linktext}</a></p> )}
                        </div> ) 
                }
            </div>
        )
    }
}

export default PhDAdmissions;