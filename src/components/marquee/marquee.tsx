import React from 'react';
import './marquee.css';
import {BsDot} from 'react-icons/bs';

interface MarqueeState{
    announcements: string[];
    events: Event[];
}

interface Event{
    name: string;
    link: string;
}

interface MarqueeProps{}

class Marquee extends React.Component<MarqueeProps,MarqueeState>{
    constructor(props: MarqueeProps,state: MarqueeState){
        super(props,state);
        this.state = {
            announcements:[],
            events:[]
        }
    }

    async componentDidMount(){
        const response = await fetch("/data/announcements.json");
        const body = await response.json();
        this.setState({
            announcements: body.announcements,
            events: body.events
        }) 
    }

    render(){
        return(
            <div className='marquee'>
                <p className='marqueeText'>Announcements: {this.state.announcements.map(element => <i><BsDot size={12}/> {element}</i>)}. <BsDot size={12}/>  Upcoming Events: {this.state.events.map(element => <i><BsDot size={12}/> {element.name}</i>)} </p> 
            </div>
        )
    }
}

export default Marquee;