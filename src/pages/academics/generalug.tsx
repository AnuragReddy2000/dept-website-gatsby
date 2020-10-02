import React from 'react';
import Carousel from '../../components/carousel/carousel';
import InfoView from '../../components/infoview/infoview';
import TableView from '../../components/tableview/tableview';
import {Helmet} from 'react-helmet';

interface GeneralUGPageState{
    data: CourseData[];
    carouselPics:string[];
}

interface GeneralUGPageProps{}

interface CourseData{
    CourseCode: string;
    CourseName: string;
    Syllabus: string;
}

class GeneralUGPage extends React.Component<GeneralUGPageProps, GeneralUGPageState>{

    constructor(props: GeneralUGPageProps, state: GeneralUGPageState){
        super(props, state);
        this.state={
            data:[],
            carouselPics:[]
        }
    }

    async componentDidMount(){
        const picResponse = await fetch("/data/carousel.json");
        const picBody = await picResponse.json();
        this.setState({
            carouselPics: picBody["General UG"],
        }) 
        const response = await fetch("/data/generalugcourses.json");
        const body = await response.json();
        this.setState({
            data: body,
        })
    }

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - UG</title>
                </Helmet>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <Carousel images={this.state.carouselPics} imagesNum={this.state.carouselPics.length}/>
                    <InfoView 
                    title='Institute-wide Undergrad Courses: ' 
                    titleColor='darkblue'
                    info={['The Department presently offers 10 foundational units of 1 credit each on various topics from basic calculus and linear algebra to differential eqns and probability to the entire community of engineering students of the Institute. These courses have been designed and scheduled in consultation with the different engineering streams so that, as far as possible, a student has the requisite math skills to enrol in any course of his/her choice offered during a particular semester.',
                    'The following is the list of common courses offered:']}
                    />
                </div>
                {this.state.data.map(value => <TableView title={value.CourseName} content={value.Syllabus} sno={value.CourseCode} overrideSnoWidth='30%'/>)}
            </div>
        )
    }
}

export default GeneralUGPage;