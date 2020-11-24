import React from'react';
import './announcements.css';
import {BsDot} from 'react-icons/bs';
import {AiOutlineCloseSquare} from 'react-icons/ai';
import {FirebaseUtils} from "../../utils/firebase_util"

interface AnnouncementsProps{
    changeTab: (tab: string) => void;
    hideAnnouncements: () => void;
}

interface AnnouncementsState{
    announcements: string[];
    events: Event[];
}

interface Event{
    name: string;
    link: string;
}

class Announcements extends React.Component<AnnouncementsProps,AnnouncementsState>{
    
    constructor(props: AnnouncementsProps,state: AnnouncementsState){
        super(props,state);
        this.state={
            announcements:[],
            events:[]
        }
    }

    async componentDidMount(){
        const body = await FirebaseUtils.getPageData("announcements");
        this.setState({
            announcements: body.announcements,
            events: body.events
        }) 

    }

    render(){
        return(
            <div className='announcementColumn'>
                <div className='announcements'>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between',alignItems:'center', width:'100%',paddingLeft:'3px'}}> 
                        <p className='announceTitle'> Announcements:</p> 
                        <AiOutlineCloseSquare onClick={this.props.hideAnnouncements} size={20} color='darkred' className='closeIcon'/>
                    </div>
                    {this.state.announcements.map(element => <p className='announceList' > <BsDot/> {element}</p>)}
                </div>
                <div className='events'>
                    <p className='announceTitle'> Upcoming Events:</p>
                    {this.state.events.map(element => <a href={element.link} style={{textDecoration:'none'}} target='_blank'><p className='announceList' > <BsDot/> {element.name}</p></a>)}
                </div>    
                <a href='/news/events' className='footerText'><p><i>visit here for more info</i></p></a>
            </div>
        )
    }
}

export default Announcements;