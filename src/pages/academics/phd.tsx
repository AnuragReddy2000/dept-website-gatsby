import React from 'react';
import Carousel from '../../components/carousel/carousel';
import InfoView from '../../components/infoview/infoview';
import './phd.css';
import {Helmet} from 'react-helmet';

interface PhDPageState{
    carouselPics:string[];
}

interface PhDPageProps{}

class PhDPage extends React.Component<PhDPageProps,PhDPageState>{

    constructor(props: PhDPageProps,state: PhDPageState){
        super(props,state);
        this.state={
            carouselPics:[]
        }
    }

    async componentDidMount(){
        const picResponse = await fetch("/data/carousel.json");
        const picBody = await picResponse.json();
        this.setState({
            carouselPics: picBody["PhD"],
        }) 
    }


    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - PhD</title>
                </Helmet>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh', whiteSpace: 'pre-line'}}>
                    <Carousel images={this.state.carouselPics} imagesNum={this.state.carouselPics.length}/>
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