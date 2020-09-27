import React from 'react';
import TableView from '../../../components/tableview/tableview';
import {Helmet} from 'react-helmet';

class Faq extends React.Component{

    render(){
        return(
            <div>
                <Helmet>
                    <title>Dmath-Btech-FAQ</title>
                </Helmet>
                <p style={{fontSize:'x-large'}}>Some frequently asked questions...</p>
                <TableView title={"Is B.Tech (M&C) the same as B.Tech (CSE) at IITH?"} content={"Well, the answer is a clear NO. While computing does require knowledge of the fundamentals of CS, the focus of this programme is on doing the Math required in different Computational Engineering streams. \n However, note that the mandatory CS courses account for almost one-fifth of the curriculum. Further, there can be additional overlap in the form of electives."}/>
                <TableView title={"Is B.Tech (M&C) at IITH similar to what is offered at other IITs ?"} content={"Both Yes and No. \n'Yes' in the sense that the program has equal rigour both in content and quality. \n'No' in the sense that it offers more flexibility and variety to choose courses related to one's stream of interest. \n For more details, please see the brochure for the programme."}/>
                <TableView title={"What are the higher education opportunities after B.Tech (M&C) ?"} content={"The curriculum is structured so as to make the students of this programme eligible for the different master's / doctoral programmes in areas related to computing offered by many of the reputed institutions across the globe."}/>
                <TableView title={'Are options like "branch change", "double major / minors in an allied engineering stream" still available?'} content={"Yes. As per the prevailing norms of the institute, a student is permitted to avail of branch change, minor or double major in an allied stream."}/>
                <TableView title={"What were the opening and closing ranks (GEN) in this programme last year?"} content={"The opening and closing ranks (GEN,Gender Neutral) in this programme for the year 2019 are 661 and 694 respectively. \n The opening and closing ranks (GEN,Gender Neutral) in this programme for the year 2018 are 854 and 1089 respectively. \n For 2017 opening and closing ranks(Gen) were 1458 and 1703, respectively."}/>
                <TableView title={"Will there be good placements for the students of this stream ?"} content={"In line with the placement scenarios at other IITs, it is envisaged that the proven students of this program will have good placements."}/>
            </div>
        )
    }
}

export default Faq;