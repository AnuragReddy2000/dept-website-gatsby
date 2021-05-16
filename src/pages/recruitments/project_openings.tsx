import React from 'react';
import InfoView from '../../components/infoview/infoview';
import {Helmet} from 'react-helmet';

class ProjectOpenings extends React.Component{

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
                <InfoView title='Advertisement for Post-Doctorate position:' titleColor='darkblue' info={[
                    'Applications are invited for one post-doctorate position to work on Topics in Commutative Algebra at the Department of Mathematics, IIT Hyderabad. The fellowship will be provided from the Startup Research Grant of Dr. Dipankar Ghosh, funded by the Science and Engineering Research Board (SERB), DST.',
                    "Eligibility: \n • Candidate must have a Ph.D degree or at least submitted the thesis. \n • Candidate’s research area should be Commutative Algebra or related topics.",
                    "Fellowship: 44,640 INR (Salary + HRA).",
                    "Duration: 1 year (which can be extended for 1 more year depending on his/her work).",
                    "How to apply: \n • Interested candidate should send the following documents to dghosh@math.iith.ac.in \n • Curriculum Vitae \n • Research Proposal \n • List of publications \n • Three recommendation letters (including Ph.D supervisor).",
                    "Last date: \n February 18, 2021"                     
                    ]}
                />
                <InfoView title='Advertisement for JRF position:' titleColor='darkblue' info={[
                    'Applications are invited for one JRF position to work on the project entitled "Sparse approximations with prior support constraint and application to interior reconstruction in tomography", funded by the Council of Scientific & Industrial Research (CSIR), at the department of Mathematics, Hyderabad',
                    "Qualification and Experience: \n - M.Sc (or B.Tech/Mtech) degree in Applied Mathematics (or ECE/Computer Science) \n - Prior experience in Numerical Linear Algebra/Optimization Techniques and any programming language is required for this position \n - Valid GATE/CSIR (JRF) is desirable",
                    "Salary: \n - As per CSIR norms",
                    "How to apply: \n Interested Candidate may email his/her CV to csastry@math.iith.ac.in",
                    "Last date: \n 31st January 2021"                     
                    ]}
                />
            </div>
        )
    }
}

export default ProjectOpenings;