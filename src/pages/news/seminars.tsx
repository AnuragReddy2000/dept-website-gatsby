import React from 'react';
import TableView from '../../components/tableview/tableview';
import './seminars.css';
import {AiFillCaretDown} from 'react-icons/ai';
import {Helmet} from 'react-helmet';

interface SeminarPageState{
    currentYear: string
    dropDownOpen: boolean
    seminars: any
}

interface SeminarPageProps{}

interface Seminar{
    SNo: string
    Topic: string
    Abstract: string
    Speaker: string
    DateVenue: string
}

class SeminarPage extends React.Component<SeminarPageProps,SeminarPageState>{
    constructor(state: SeminarPageState){
        super(state);
        this.state = {
            currentYear: "2019",
            dropDownOpen: false,
            seminars: undefined
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/seminars.json");
        const body = await response.json();
        this.setState({
            seminars: body
        })
    }

    changeYear = (year: string) => {
        this.setState({
            currentYear: year,
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    toggleDropDown =()=>{
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    }

    render(){
        const seminarList = (this.state.seminars===undefined) ? [] : this.state.seminars[this.state.currentYear] as Seminar[];

        return(
            <div className='seminarPage'>
                <Helmet>
                    <title>DMath - Seminars</title>
                </Helmet>
                <div className='seminarPageHeader'>
                    <p style={{fontSize:'x-large', marginTop:'1px', marginBottom:'1px', color:'darkblue'}}>Seminars:</p>
                    <div className='yearDropDown' onClick={this.toggleDropDown}>
                        <p>{this.state.currentYear} <AiFillCaretDown/></p>
                    </div>
                </div>
                {this.state.dropDownOpen ? <div className='yearDropDownListBox'>
                    <div className='yearDropDownList'>
                        <p onClick={() => this.changeYear("2019")} className='yearListItem'>2019</p>
                        <p onClick={() => this.changeYear("2018")} className='yearListItem'>2018</p>
                        <p onClick={() => this.changeYear("2017")} className='yearListItem'>2017</p>
                        <p onClick={() => this.changeYear("2016")} className='yearListItem'>2016</p>
                        <p onClick={() => this.changeYear("2015")} className='yearListItem'>2015</p>
                        <p onClick={() => this.changeYear("2014")} className='yearListItem'>2014</p>
                        <p onClick={() => this.changeYear("2013 and older")} className='yearListItem'>2013 and older</p>
                    </div>
                </div> : null}
                <div className='seminarLists'>
                    {seminarList.map(value => <TableView title={value.Topic} sno={value.SNo} speaker={value.Speaker} content={value.Abstract} dateVenue={value.DateVenue}/>)}
                </div>
            </div>
        )
    }
}

export default SeminarPage;