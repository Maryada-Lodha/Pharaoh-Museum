import React from "react";
import EventCard from './EventCard';
import eventImage1 from '../assets/images/event-image-1.png';
import eventImage2 from '../assets/images/event-image-2.png';
import eventImage3 from '../assets/images/event-image-3.png';
import eventImage4 from '../assets/images/event-image-4.png';

function EventGrid() {
    return <div className="container">
        <div className="row">
            <EventCard eventImage={eventImage1} altText="Event 1" />
            <EventCard eventImage={eventImage2} altText="Event 2" />
            <EventCard eventImage={eventImage3} altText="Event 3" />
            <EventCard eventImage={eventImage4} altText="Event 4" />
        </div>
    </div>
}

export default EventGrid;