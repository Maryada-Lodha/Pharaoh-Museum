import React from "react";
import Header from "./Header";
import EventGrid from './EventGrid';
import eventImg from '../assets/images/event-bg-img.png';

function EventPage() {
    return <div>
        <Header bgImg={eventImg} headerText="Upcoming Events" />    
        <EventGrid />
        </div>
}

export default EventPage;