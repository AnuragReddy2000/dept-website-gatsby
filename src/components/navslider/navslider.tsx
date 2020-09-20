import React from 'react';
import './navslider.css';
import NavTab from './navtab/navtab';
import DropDownTab from './dropdowntab/dropdowntab';
import {AiOutlineHome} from 'react-icons/ai';
import {DropDownList} from '../../models/DropDownsAndTabs';
import {Link} from 'gatsby';

interface NavSliderProps{
    currentTab: string;
    changeTab: (tab: string) => void;
}

interface NavSliderState{
    currentDropDown: string;
}

class NavSlider extends React.Component<NavSliderProps, NavSliderState>{
    constructor(props: NavSliderProps, state: NavSliderState){
        super(props);
        this.state = {
            currentDropDown: 'None'
        }
    }

    changeDropDownTab=(newDropDown: string): void =>{
        this.setState({
            currentDropDown: newDropDown
        })
    }

    home=():void =>{
        this.props.changeTab('Home');
        this.changeDropDownTab('None');
    }

    render(){
        return(
            <div>
                <div className='Slider'>
                    <NavTab name='Home' onClickEvent={this.home} currentTab={this.props.currentTab} urlLink='/' icon={AiOutlineHome} pageType='component'/>
                    {DropDownList.map((value,index) =>  <DropDownTab key={index} name={value.title} currentTab={this.props.currentTab} icon={value.icon} currentDropdown={this.state.currentDropDown} onClickEvent={this.props.changeTab} dropDownUpdate={this.changeDropDownTab} contentTabs={value.subTitles}/>)} 
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