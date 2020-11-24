import React from 'react';
import InfoView from '../../components/infoview/infoview';
import './phd.css';
import {Helmet} from 'react-helmet';
import {FirebaseUtils} from '../../utils/firebase_util'

interface InfoViewRaw{
    header: string;
    body: string[];
    links: {"link":string,"linktext":string}[]
}

interface PhDAdmissionsState{
    data: InfoViewRaw[],
    isLoading: boolean
}

interface PhDAdmissionsProps{}

class PhDAdmissions extends React.Component<PhDAdmissionsProps,PhDAdmissionsState>{
    constructor(props: PhDAdmissionsProps,state: PhDAdmissionsState){
        super(props,state);
        this.state = {
            isLoading : true,
            data : []
        }
    }

    async componentDidMount(){
        const body = await FirebaseUtils.getPageData("phd_admissions") as {"components":InfoViewRaw[]};
        this.setState({
            data : body.components,
            isLoading : false
        })
    }

    render(){
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <Helmet>
                    <title>DMath - PhD Admissions</title>
                </Helmet>
                {this.state.isLoading ? <div style={{height:"100%",width:"100%", textAlign:"center"}}><p>loading...</p></div>
                    : this.state.data.map(each => <InfoView title={each.header} titleColor="darkblue" info={each.body} links={each.links}/>)}
            </div>
        )
    }
}

export default PhDAdmissions;