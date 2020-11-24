import React from 'react';
import InfoView from '../../components/infoview/infoview';
import {Helmet} from 'react-helmet';

class FacultyRecruitment extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - Project Openings</title>
                </Helmet>
                <InfoView title='Project Openings:' titleColor='darkblue' info={['Interested candidates can write to the project PI for more details. Please see the following page for possible openings:',]}
                    links={[
                        {
                            "link":'/research/fundedprojects',
                            "linktext":'Details of Funded Projects'
                        }
                    ]}
                />
            </div>
        )
    }
}

export default FacultyRecruitment;