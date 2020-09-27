import React from 'react';
import './titlebar.css';
import {MdMenu} from'react-icons/md';
import iithlogo from '../../images/homePage/iithlogo.jpg';
import deptTitleSmall from '../../images/homePage/deptTitleSmall.jpg';
import deptTitleLarge from '../../images/homePage/deptTitleLarge.jpg';

interface TitleBarState{
    showSlider: boolean;
}

interface TitleBarProps{
    toggleShowSlider():void;
}

class TitleBar extends React.Component<TitleBarProps, TitleBarState>{
    constructor(props: TitleBarProps, state: TitleBarState) {
        super(props,state);
        this.state = {
            showSlider: false
        }
    }

    render(){
        return(
            <div className='titleBar'>
                <div className='deptTitle'>
                    <MdMenu className='menuIcon' onClick={this.props.toggleShowSlider} size={32}/>
                    <a href='/' className='titleImageLarge' style={{width:'100%',height:'100%'}}><img className='titleImageLarge' src= {deptTitleLarge} alt='Department of Mathematics, IIT Hyderabad' height='90%'></img></a>
                    <a href='/' className='titleImageSmall' style={{width:'100%',height:'100%'}}><img className='titleImageSmall'  src= {deptTitleSmall} alt='Department of Mathematics, IITH' width='90%' height='100%'></img></a>
                </div>
                <div className='iithImage'>
                    <a href='https://iith.ac.in/' target='_blank' style={{width:'100%',height:'100%'}}><img src={iithlogo} alt='IITH Logo' height='70%'></img></a>
                </div>
            </div>
        )
    }
}

export default TitleBar;