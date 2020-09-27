import React from 'react';
import InfoView from '../../components/infoview/infoview';
import TableView from '../../components/tableview/tableview';
import {Helmet} from 'react-helmet';

class CurriculumPage extends React.Component{

    render(){
        return(
            <div style={{width: '100%', display:'flex',flexDirection:'column',justifyContent:'flex-start'}}>
                <Helmet>
                    <title>Dmath - Curriculum</title>
                </Helmet>
                <InfoView title='Curriculum: ' titleColor='darkblue' info={['The flexibility in our academic structure has resulted in various curricula for various batches, each designed to be an improvement over the previous.','All the links to various curricula are given below:']}/>
                <TableView title={'B.TECH 2020 CURRICULUM'} speaker='Faculty Advisor:  Dr. Neeraj Kumar' link='/pdfs/BTechCurriculum2020.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'B.TECH 2019 CURRICULUM'} speaker='Faculty Advisor:  Dr. Sukumar D' link='/pdfs/BTechCurriculum2019.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'B.TECH 2018 CURRICULUM'} speaker='Faculty Advisor:  Dr. Subrahmanya Sastry Challa' link='/pdfs/BtechCurriculum2018.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'B.TECH 2017 CURRICULUM'} speaker='Faculty Advisor:  Dr. Pradipto Banerjee' link='/pdfs/BtechCurriculum2017.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'M.SC 2020 CURRICULUM'} speaker='Faculty Advisor:  Dr. Satya Prakash Singh' link='/pdfs/MscCurriculum2020.pdf' linkText='Link to the Curriculum'/>
                <TableView title={'M.SC 2019 CURRICULUM'} speaker='Faculty Advisor:  Dr. Anantha Lakshmi Narayana P' link='/pdfs/MscCurriculum2019.pdf' linkText='Link to the Curriculum'/>
                <div style={{alignSelf:'center'}}>
                    <p>Institute couse booklets can be found here: <a href='https://www.iith.ac.in/academics/assets/files/pdf/20200227-Courses-of-Study-Bachelors.pdf' target='_blank'>UG Booklet</a> and <a href='https://www.iith.ac.in/academics/assets/files/pdf/20200227-Courses-of-Study-Masters-PhD.pdf' target='_blank'>PG Booklet</a></p>
                </div>
                <div style={{alignSelf:'center'}}>
                    <p>Academic handbook and guidelines can be found <a href='http://intranet.iith.ac.in/wiki/AcademicHandbooks' target='_blank'>here</a></p>
                </div>
            </div>
        )
    }
}

export default CurriculumPage;