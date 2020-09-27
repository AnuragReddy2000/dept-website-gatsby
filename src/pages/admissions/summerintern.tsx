import React from 'react';
import InfoView from '../../components/infoview/infoview';
import {Helmet} from 'react-helmet';

class SummerInternships extends React.Component{

    render(){
        return(
            <div style={{width: '100%'}}>
                <Helmet>
                    <title>Dmath - Summer Intern</title>
                </Helmet>
                <InfoView title='Summer Internships:' titleColor='darkblue' info={['Interested candidates may contact the faculty members individually.']}/>
            </div>
        )
    }
}

export default SummerInternships;