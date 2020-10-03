import React from 'react';
import InfoView from '../../components/infoview/infoview';
import './btech.css'
import {Helmet} from 'react-helmet';

class BtechMnCPage extends React.Component{

    render(){
        return(
            <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', width:'100%', height:'100%'}}>
                <Helmet>
                    <title>DMath - Btech</title>
                </Helmet>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh', marginBottom:'1vh'}}>
                    <div style={{width:'100%', alignItems:'center', display:'flex', flexDirection:'row', justifyContent:'center', paddingTop:'15px', paddingBottom:'15px'}}>
                        <img src={"/images/academics/btechMnC/ubd_quote.png"} className='MnCPic'/>
                    </div>
                    <InfoView 
                    title='B.Tech (Mathematics and Computing): ' 
                    titleColor='darkblue'
                    info={['The B.Tech Mathematics and Computing program started in the academic year 2017-2018 by our founder director, Professor U. B. Desai, with the first batch of 10 students. For the academic year 2020, the number of seats has been increased to 20.']}
                    />
                </div>
                <InfoView 
                title='Curriculum 2020 at a glance.'
                titleColor='darkblue'
                info={["The curriculum is designed in a unique way to nurture future industry professionals and scientists. There are three stages of the curriculum. Students do introductory mathematics, physics, chemistry, life sciences, and bio-engineering courses in the first stage. The program also begins with courses on programming and skill development such as English communication, introduction to entrepreneurship, artificial intelligence, and creative arts electives.",
                "The second stage is a phase of nurturing students to make them multiskilled for both industry or academics. During the 3rd to 5th semester, the program covers the core foundational courses from pure mathematics, applied mathematics, statistics, and computing courses from computer science, artificial intelligence, and electrical engineering. The blend of carefully selected theoretical, applicable, and computing courses will enable students to choose the career they wish to pursue.",
                "The third stage is all about exploration. The dream career that students have decided to pursue by the end of the second stage begins from the 6th semester. The exploration nature comes from the fact that 38 credits out of 46 credits from the 6th to 8th semester come in electives. Namely, half of the credits are of advanced mathematics and computational mathematics electives. Students have 12 credits of free elective courses to choose from any department in the institute. The students have an option of a semester-long Industry project in the 6th semester. Department also offers credited research projects for two semesters in this stage up to 6 credits.",
                "Upon successfully completing the Mathematics and computing program, students will be able to pursue the dream of becoming industry professionals. This program also provides an opportunity for higher education in mathematics, computer science, artificial intelligence, etc., in world-class universities.",
                ]}
                />
                <div style={{display:'flex',flexDirection:'column',padding:'10px',backgroundColor:'rgb(250,250,250)'}}>
                    <img src={"/images/academics/btechMnC/ranks.jpg"} width='100%'></img>
                </div>
                <div className='bmpInfoContent'>
                    <InfoView 
                    title='Brochure:' 
                    info={['Wondering what is B.Tech (M&C) or why do B.Tech (M&C) at IIT Hyderabad? Click on the icon above or the link below to know all the details about the programme at a glance.','To be updated...']}
                    />
                    <InfoView 
                    title='Curriculum:' 
                    info={['The entire course curriculum for the programme along with the list of electives can be found under the following link.']}
                    link = '/academics/curriculum'
                    linkText = 'Link to the Curriculum'
                    />
                    <InfoView 
                    title='FAQs:' 
                    info={['Still have some questions unanswered? Or, some lingering doubts? Check out our FAQ page - who knows, you may only be replicating the neuronal state some one else was in not long ago !']}
                    link = '/academics/btech/faq'
                    linkText = 'Link to FAQs'
                    />
                </div>
            </div>
        )
    }
}

export default BtechMnCPage;