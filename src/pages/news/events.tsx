import React from 'react';
import './events.css';
import {Helmet} from 'react-helmet';

interface EventsPageState{
    searchDate: Date;
}

interface EventsPageProps{}

class EventsPage extends React.Component<EventsPageProps,EventsPageState>{
    constructor(props: EventsPageProps,state: EventsPageState){
        super(props,state);
        this.state = {
            searchDate: new Date()
        }
    }

    render(){
        return(
            <div  className='EventsPageBody'>
                <Helmet>
                    <title>DMath - Events</title>
                </Helmet>
                <div className='EventsPageHeader'>
                    <p style={{margin: '0px', padding: '0px'}}>Events:</p>
                </div>
                <div className='EventsPageCalendarRow'>
                    <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23fafafa&amp;ctz=Asia%2FKolkata&amp;src=Y185MjJxc3M2dm5lbG1jbjgwbmpwYWVycDZwY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23F4511E&amp;showPrint=0&amp;showCalendars=0" style={{borderWidth:"0", width:"100%", height:"100%", backgroundColor: "rgb(250,250,250)"}}></iframe>
                </div>
            </div>
        )
    }
}

export default EventsPage;