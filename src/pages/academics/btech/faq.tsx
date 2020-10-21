import React from 'react';
import TableView from '../../../components/tableview/tableview';
import {Helmet} from 'react-helmet';

class Faq extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>DMath-Btech-FAQ</title>
                </Helmet>
                <p style={{fontSize:'x-large'}}>Some frequently asked questions...</p>
                <TableView title={"Is B.Tech (M&C) the same as B.Tech (CSE) at IITH?"} content={"Well, the answer is a clear NO. While computing does require knowledge of the fundamental courses of CSE, the focus of the M&C program is on doing the mathematics and essential programming and computational courses. The program aims to nurture multi skilled professionals for both industry and academics. \n\n There are 15 credits of CSE core courses in the curriculum. Students interested in CSE courses can make use of free electives worth 12 credits for the same. Moreover, a student maintaining a good CGPA will be allowed to take additional courses as per their interest."}/>
                <TableView title={"Is B.Tech (M&C) the mix of B.Tech (CSE+ AI + EE) at IITH?"} content={"The answer is a clear NO. Besides mathematics, M&C students do standard introductory engineering courses, programming courses, and AI courses. The core curriculum has computation and programming components CSE (15 credits), EE (6 credits), and AI (5 credits) \n\n In addition to the above, students have 12 credits of free electives. Students are encouraged to use free electives to register for courses of their interests from any department in the institute. Moreover, a student maintaining a good CGPA will be allowed to take additional courses as per their interests."}/>
                <TableView title={"Is B.Tech (M&C) at IITH similar to what is offered at other IITs ?"} content={"Both Yes and No. \n'Yes' in the sense that the program has equal rigour both in content and quality. \n'No' in the sense that it offers more flexibility and variety to choose courses related to one's stream of interest. \n For more details, please see the brochure for the programme."}/>
                <TableView title={"What are the higher education opportunities after B.Tech (M&C) ?"} content={"This program provides an excellent opportunity for learning theoretical and computational mathematics for pursuing higher education in mathematics, computer science, artificial intelligence, etc. in world-class universities."}/>
                <TableView title={'Are options like "branch change", "double major / minors in an allied engineering stream" still available?'} content={"Yes. As per the prevailing norms of the institute, a student is permitted to avail of branch change, minor or double major in an allied stream."}/>
                <TableView title={"What were the opening and closing ranks (GEN) in this programme last year?"} content={"The opening and closing ranks (GEN,Gender Neutral) in this programme for the year 2019 are 661 and 694 respectively. \n The opening and closing ranks (GEN,Gender Neutral) in this programme for the year 2018 are 854 and 1089 respectively. \n For 2017 opening and closing ranks(Gen) were 1458 and 1703, respectively."}/>
                <TableView title={"Will there be good placements for the students of this stream ?"} content={"We expect students will get good placements. Note that the Department of Mathematics started the B. Tech in Maths and Computing program in the year 2017-18 with a batch size of 10. The first batch is all set to graduate in the academic year 2020 - 21. \n\n The placement session for the first batch is scheduled in December 2020. We are glad to announce that 3 of our students have already received pre-placement offers (PPOs) from the companies - Goldman Sachs, Microsoft (as of 27th September 2020)."}/>
            </div>
        )
    }
}

export default Faq;