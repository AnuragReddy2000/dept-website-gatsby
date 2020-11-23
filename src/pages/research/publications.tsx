import React from 'react';
import './publications.css';
import {BsDot} from 'react-icons/bs';
import {AiFillCaretDown} from 'react-icons/ai';
import {Helmet} from 'react-helmet';

interface PublicationsPageState{
    currentYear: string;
    dropDownOpen: boolean;
    publications: Array<{"year":string, "publications":Publication[]}>,
    isLoading: boolean
}

interface PublicationsPageProps{}

interface Publication{
    people: string;
    name: string;
    details: string;
}

class PublicationsPage extends React.Component<PublicationsPageProps,PublicationsPageState>{
    constructor(props: PublicationsPageProps,state: PublicationsPageState){
        super(props,state);
        this.state = {
            currentYear: "2020",
            dropDownOpen: false,
            publications: [],
            isLoading: true
        }
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

    async componentDidMount(){
        const response = await fetch("/data/publications.json");
        const body = await response.json() as {"publications":Array<{"year":string, "publications":Publication[]}>};
        this.setState({
            publications: body.publications,
            isLoading: false
        })
    }

    getPublications = (publicationJson: Array<{"year":string, "publications": Publication[]}>, currentYear: string) => {
        let output = publicationJson.find(x=>x.year===currentYear)
        return (output) ? output.publications : [] as Publication[]
    }


    render(){
        const publications = (this.state.publications===undefined) ? []:this.getPublications(this.state.publications,this.state.currentYear);

        return(
            <div className='publicationsPage'>
                <Helmet>
                    <title>DMath - Publications</title>
                </Helmet>
                <div className='publicationsPageHeader'>
                    <p style={{fontSize:'x-large', marginTop:'1px', marginBottom:'1px', color:'darkblue'}}>Publications:</p>
                    <div className='publicationsYearDropDown' onClick={this.toggleDropDown}>
                        <p>{this.state.currentYear} <AiFillCaretDown/></p>
                    </div>
                </div>
                {this.state.dropDownOpen ? <div className='publicationsYearDropDownListBox'>
                    <div className='publicationsYearDropDownList'>
                        <p onClick={() => this.changeYear("2020")} className='publicationsYearListItem'>2020</p>
                        <p onClick={() => this.changeYear("2019")} className='publicationsYearListItem'>2019</p>
                        <p onClick={() => this.changeYear("2018")} className='publicationsYearListItem'>2018</p>
                        <p onClick={() => this.changeYear("2017")} className='publicationsYearListItem'>2017</p>
                    </div>
                </div> : null}
                <div className='publicationsColumn'>
                    {this.state.isLoading ? <p style={{textAlign:'center', position:'fixed', top:'50vh',right:'45vw', color:'darkgray'}}><i>loading...</i></p> 
                    :publications.map(item => <div className='publicationPageLine'>
                        <BsDot size={32}/><p style={{width: '95%'}}> {item.people + ', '} <i style={{color:'darkblue'}}>{item.name}</i> {' ' + item.details}</p>
                    </div>)}
                </div>
        </div>
        )
    }
}

export default PublicationsPage;