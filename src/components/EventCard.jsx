import React from 'react';
import './styles/EventCard.css';

const EventCard = (props) => {
    return (
        <div className='col-lg-6 col-md-12 col-sm-12 event-container'>
            <div className='card-body'>
                <h2 className='overlay-event-date'>26 <br></br> Sept</h2>
                <p className='overlay-event-description'>
                    <h2 className='overlay-event-name'>Lourem Ipsum</h2>
                    Lorem ipsum dolor sit amet consectetur. Lectus nunc neque tellus pharetra sit bibendum porttitor faucibus auctor. Adipiscing dictumst amet senectus commodo porta adipiscing.
                </p>
                <i class="fa-solid fa-clock fa-2x"></i>
                <p className='overlay-event-time'>10:00 am - 12:00pm</p>
                <button type="button" class="btn btn-book">Book Now</button>
            </div>
            <img className="event-image" src={props.eventImage} alt={props.altText} />
            <p className='event-description'>
                <h2 className='event-name'>Lourem Ipsum</h2>
                Lorem ipsum dolor sit amet consectetur. Lectus nunc neque tellus pharetra sit bibendum porttitor faucibus auctor. Adipiscing dictumst amet senectus commodo porta adipiscing.
            </p>

        </div>
    );
};

export default EventCard;
