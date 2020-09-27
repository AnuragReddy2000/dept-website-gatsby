import React from 'react';
import Carousel from '../components/carousel/carousel';
import InfoView from '../components/infoview/infoview';
import {CarouselPics} from '../models/CarouselPics';
import './homepage.css';
import {Helmet} from 'react-helmet';

class Homepage extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>Department of Mathematics</title>
                </Helmet>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <Carousel images={CarouselPics['About Us']} imagesNum={CarouselPics['About Us'].length}/>
                    <InfoView 
                    title='Welcome to Department of Mathematics:' 
                    titleColor='darkblue'
                    info={['The Department of Mathematics was one of the six departments that was founded along with the Institute in 2008. Since its inception, the department has made a conscious effort to grow in sync with the directions of the Institute and an awareness of the larger needs of the society.', 
                    'In consonance with this philosophy, the department aims "to foster eclecticism and excellence in mathematical education and research which is well poised between abstraction and application."']}
                    />
                </div>
                <div className='hpInfoContent'>
                    <InfoView 
                    title='Teaching Fulcrum' 
                    info={['As one of the basic science departments, the department remains as the fulcrum of teaching that offers many foundational math courses for the entire community of students at IIT Hyderabad.',
                    'From the academic year 2017-18, the department has started to offer a new undergrad programme called the B.Tech (Mathematics and Computing).',
                    'The Master of Science programme of the department allows specialisation in two streams, viz., Mathematics and Mathematics and Computing.',
                    'The vibrant doctoral programme of the department attracts students of varied interests and has been successful in creating researchers who are well-prepared to enter both the academia and the industry.',
                    'The department further offers a Minor in B.Tech (Mathematics and Computing) and Double major in B.Tech (Mathematics and Computing).',
                    ]}
                    />
                    <InfoView 
                    title='Leverageable Research' 
                    info={['The Department has young and dedicated faculty working both in pure and applied branches of Mathematics who actively collaborate with their counterparts from within and outside the department.',
                    'Faculty members have achieved many distinctions - for instance, they have been invited to be part of research committees of the Government of India, are established resource personnels in programmes promoting both basic and advanced Mathematics and are members of the editorial board of reputed journals.']}
                    />
                </div>
            </div>
        )
    }
}

export default Homepage;