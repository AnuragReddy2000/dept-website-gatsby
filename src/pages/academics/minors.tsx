import React from 'react';
import InfoView from '../../components/infoview/infoview';
import {Helmet} from 'react-helmet';

class Minors extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath - Majors and Minors</title>
                </Helmet>
                <div style={{width:'100%', backgroundColor:'rgb(250,250,250)', paddingTop: '2vh', marginTop: '1vh'}}>
                    <InfoView 
                    title='Minor in B.Tech (Maths and Computing):' 
                    titleColor='darkblue'
                    info={["The department of Mathematics offers a Minor in Mathematics and Computing for any B.Tech student who takes courses worth 12 credits from the courses at a level greater than 3 offered by the department, over and above the credit requirements mandated by the student's parent department."]}
                    />
                </div>
                <InfoView 
                title='Double Major in B.Tech (Maths and Computing):'
                titleColor='darkblue'
                info={["The department of Mathematics offers a Major in Mathematics and Computing for a B.Tech student who takes courses worth 24 credits as prescribed below:","The following courses totaling 12 credits are mandatory.\n\n - MA4010  Analysis of Functions of a Single Variable\n - MA4020  Linear Algebra\n - MA4060  Complex Analysis\n - MA4070  Algebra I - Groups and Rings","The other 12 credits can be taken from any of the 5 or 6 level courses offered by the department."]}/>
                <div style={{width:'100%', textAlign:'center'}}>
                    <p>The courses offered by our department can be found <a href='https://www.iith.ac.in/academics/assets/files/pdf/20200227-Courses-of-Study-Bachelors.pdf' target='_blank'>here</a></p>
                </div>
            </div>
        )
    }
}

export default Minors;