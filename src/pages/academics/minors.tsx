import React from 'react';
import Carousel from '../../components/carousel/carousel';
import InfoView from '../../components/infoview/infoview';
import {CarouselPics} from '../../models/CarouselPics';
import {MinorsCourses} from '../../models/MinorsCourses';
import TableView from '../../components/tableview/tableview';

class Minors extends React.Component{

    render(){
        return(
            <div>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <InfoView 
                    title='Minor in B.Tech (Maths and Computing):' 
                    titleColor='darkblue'
                    info={["The department of Mathematics offers a Minor in Mathematics and Computing for any B.Tech student who takes courses worth 12 credits from the courses at a level greater than 3 offered by the department, over and above the credit requirements mandated by the student's parent department."]}
                    />
                </div>
                <InfoView 
                title='Double major in B.Tech (Maths and Computing):'
                titleColor='darkblue'
                info={["The department of Mathematics offers a Major in Mathematics and Computing for a B.Tech student who takes courses worth 24 credits as prescribed below:","The following courses totaling 12 credits are mandatory.\n\nMA4010  Analysis of Functions of a Single Variable\nMA4020  Linear Algebra\nMA4060  Complex Analysis\nMA4070  Algebra I - Groups and Rings","The other 12 credits can be taken from any of the 5 or 6 level courses.","Given below are a list of various courses available to the students to choose from:"]}/>
                {MinorsCourses.map(value => <TableView title={value['CourseName']} content={value['Syllabus']} sno={value['CourseCode']} overrideSnoWidth='30%'/>)}
            </div>
        )
    }
}

export default Minors;