import React from 'react';
import './navslider.css';
import NavTab from './navtab/navtab';
import DropDownTab from './dropdowntab/dropdowntab';
import {AiOutlineHome} from 'react-icons/ai';
import {getIcon} from '../../utils/iconmap_util';
import {Link} from 'gatsby';
import {FirebaseUtils} from "../../utils/firebase_util";

interface NavSliderProps{
    currentTab: string;
    changeTab: (tab: string) => void;
}

interface NavSliderState{
    currentDropDown: string;
    isloading: boolean;
    pages: Object
}

class NavSlider extends React.Component<NavSliderProps, NavSliderState>{
    constructor(props: NavSliderProps, state: NavSliderState){
        super(props);
        this.state = {
            currentDropDown: 'None',
            isloading: true,
            pages: {}
        }
    }

    async componentDidMount(){
        const body = await FirebaseUtils.getPageData("page_routes") as Object;
        this.setState({
            pages: body,
            isloading: false
        })
    }

    changeDropDownTab=(newDropDown: string): void =>{
        this.setState({
            currentDropDown: newDropDown
        })
    }

    home=():void =>{
        this.props.changeTab('/');
        this.changeDropDownTab('None');
    }

    render(){
        const pages = this.state.pages as {"routes":{"section":string,"pages":{name: string, url: string, pageType: string}[]}[]}
        return(
            <div>
                <div className='Slider'>
                    <NavTab name='Home' onClickEvent={this.home} currentTab={this.props.currentTab} urlLink='/' icon={AiOutlineHome} pageType='component'/>
                    {this.state.isloading ? <div style={{height:"80vh"}}/>:pages.routes.map(tab => <DropDownTab name={tab.section} contentTabs={tab.pages} currentDropdown={this.state.currentDropDown} currentTab={this.props.currentTab} onClickEvent={this.props.changeTab} dropDownUpdate={this.changeDropDownTab} icon={getIcon(tab.section)}/>)} 
                    <div className='contactUs'>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: '0px'}}>
                            <Link to='/misc/contactus' style={{textDecoration: 'none', color: 'inherit', alignSelf: 'flex-start'}}><p style={(this.props.currentTab=='contactus') ? {color: "blue"}:{}} onClick={()=>this.props.changeTab('contactus')}>Contact Us </p></Link>
                            <Link to='/misc/credits' style={{textDecoration: 'none', color: 'inherit', alignSelf: 'flex-end'}}><p style={(this.props.currentTab=='credits') ? {color: "blue"}:{}} onClick={()=>this.props.changeTab('credits')}>Credits</p></Link>
                        </div>
                        <p style={{}}> <a href='https://www.iith.ac.in/' style={{textDecoration: 'none', color: 'inherit', marginBottom: '3px', marginTop: '0px'}} target='_blank'>IITH Home</a></p>
                    </div>   
                </div>
            </div>
        )
    }
}

export default NavSlider;