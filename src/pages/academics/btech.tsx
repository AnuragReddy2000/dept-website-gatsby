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
                    info={['The B.Tech Mathematics and Computing (M&C) program started in the academic year 2017-2018. The M&C curriculum is designed in a unique way to nurture future industry professionals and scientists. The blend of carefully selected theoretical, applicable, and computing courses will enable students to choose the career they wish to pursue.',
                    'Upon successfully completing the M&C program, students will be able to pursue the dream of becoming industry professionals. This program also provides an opportunity for higher education in mathematics, computer science, artificial intelligence, etc., in world-class universities.']}
                    />
                </div>
                <div style={{display:'flex',flexDirection:'column',padding:'10px',backgroundColor:'rgb(250,250,250)'}}>
                    <img src={"/images/academics/btechMnC/ranks.jpg"} width='100%'></img>
                </div>
                <div className='bmpInfoContent'>
                    <InfoView 
                    title='Brochure:' 
                    info={['Wondering what is B.Tech (M&C) or why do B.Tech (M&C) at IIT Hyderabad? Click on the icon above or the link below to know all the details about the programme at a glance.']}
                    link='/pdfs/MnC_Brochure_2020.pdf'
                    linkText='Link to the Brochure'
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