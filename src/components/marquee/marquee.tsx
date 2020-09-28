import React from 'react';
import './marquee.css';
import {BsDot} from 'react-icons/bs';

interface MarqueeState{
    announcements: string[];
}

interface MarqueeProps{}

class Marquee extends React.Component<MarqueeProps,MarqueeState>{
    constructor(props: MarqueeProps,state: MarqueeState){
        super(props,state);
        this.state = {
            announcements:[]
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/announcements.json");
        const body = await response.json();
        this.setState({
            announcements: body.announcements,
        }) 
    }

    render(){
        return(
            <div className='marquee'>
                <p className='marqueeText'>Announcements: {this.state.announcements.map(element => <i><BsDot size={12}/> {element}</i>)} </p> 
            </div>
        )
    }
}

export default Marquee;