import React from 'react';
import './titleBar.css';
import {MdMenu} from'react-icons/md';
import iithlogo from '../../images/homePage/iithlogo.jpg';
import deptTitleSmall from '../../images/homePage/deptTitleSmall.jpg';
import deptTitleLarge from '../../images/homePage/deptTitleLarge.png';

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
                    <img className='titleImageLarge' src= {deptTitleLarge} height='90%'></img> 
                    <img  className='titleImageSmall' src= {deptTitleSmall} width='90%' height='100%'></img>
                </div>
                <div className='iithImage'>
                    <img src={iithlogo} height='70%'></img>
                </div>
            </div>
        )
    }
}

export default TitleBar;