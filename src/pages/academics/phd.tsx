import React from 'react';
import Carousel from '../../components/carousel/carousel';
import InfoView from '../../components/infoview/infoview';
import {CarouselPics} from '../../models/CarouselPics';
import './phd.css';
import {Helmet} from 'react-helmet';

class PhDPage extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>Dmath - PhD</title>
                </Helmet>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh', whiteSpace: 'pre-line'}}>
                    <Carousel images={CarouselPics['PhD']} imagesNum={CarouselPics['PhD'].length}/>
                    <InfoView 
                    title='Our Doctoral Programme: ' 
                    titleColor='darkblue'
                    info={['The department has a lively research environs with an active and spirited group of researchers.']}
                    />
                </div>
                <div className='phdInfoContent'>
                    <InfoView 
                    title='Brochure' 
                    info={['Wondering why do Ph.D. at IIT Hyderabad? Click on the icon above or the link below to know all the details about the programme at a glance.']}
                    link='/pdfs/phd_brochure.pdf'
                    linkText='Link to the Brochure'
                    />
                    <InfoView 
                    title='Curriculum' 
                    info={['The entire course curriculum for the programme along with the list of electives can be found under the following link.']}
                    link='/pdfs/phd_curriculum.pdf'
                    linkText='Link to the Curriculum'
                    />
                </div>
            </div>
        )
    }
}

export default PhDPage;