import React from 'react';
import InfoView from '../../components/infoview/infoview';
import './msc.css';
import {Helmet} from 'react-helmet';

class MScPage extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - MSc</title>
                </Helmet>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh', whiteSpace: 'pre-line'}}>
                    <InfoView 
                    title='Master of Sciences: ' 
                    titleColor='darkblue'
                    info={['The department has been running a Master of Sciences programme since the academic year 2013 - 14 with specialisation in two streams, viz., ‘Mathematics’ and ‘Mathematics and Computing.’ ', 
                    'The objective of the M.Sc Mathematics program is to provide students with a strong theoretical background in mathematics for pursuing research in both pure and applied mathematics.',
                    'The M.Sc Mathematics and Computing program aims to produce students with a good-firm background in theoretical and applied mathematics, supplemented with the required computational skills. Students have the flexibility to pursue higher studies or orient themselves towards a career in the industry.',
                    'Salient features of the M.Sc program:',
                    '- The first semester is common to both the streams. \n - Freedom to choose between two streams: Mathematics or Mathematics and Computing. \n - Streams based on the electives chosen in the 2nd–4th semesters. \n - Sufficient emphasis on building a firm foundational knowledge. \n - Exposure to research through mandatory project work for all students. \n - Students are free to pursue interests in both streams.'
                    ]}
                    />
                </div>
                <div className='mscInfoContent'>
                    <InfoView 
                    title='Brochure' 
                    info={['Wondering why do M.Sc at IIT Hyderabad? Click on the icon above or the link below to know all the details about the programme at a glance.']}
                    link='/pdfs/msc_brochure.pdf'
                    linkText='Link to the Brochure'
                    />
                    <InfoView 
                    title='Curriculum' 
                    info={['The entire course curriculum for the programme along with the list of electives can be found under the following link.']}
                    link='/pdfs/MscCurriculum2020.pdf'
                    linkText='Link to the Curriculum'
                    />
                </div>
            </div>
        )
    }
}

export default MScPage;