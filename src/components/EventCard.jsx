import React from 'react';
import { useState } from 'react';
import './styles/EventCard.css';
import Modal from 'react-bootstrap/Modal';

const EventCard = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <button type="button" class="btn btn-book" onClick={handleShow}>Book Now</button>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <h1 className="modal-title">Lorem Ipsum</h1>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container">
                            <form>
                                <div className="row">
                                    <input type="text" class="form-control book-form-inputfield-sm" id="fname" placeholder='First Name'></input>
                                    <input type="text" class="form-control book-form-inputfield-sm" id="lname" placeholder='Last Name'></input>
                                </div>
                                <div className="row">
                                    <input type="email" class="form-control book-form-inputfield-lg" id="emailID" placeholder='Email Address'></input>
                                </div>
                                <div className="row">
                                    <input type="number" class="form-control book-form-inputfield-lg" id="phone_number" placeholder='Phone Number'></input>
                                </div>
                                <div className="row">
                                    <input type="number" class="form-control book-form-inputfield-sm" id="num_of_adults" placeholder='No. of Adults'></input>
                                    <input type="number" class="form-control book-form-inputfield-sm" id="num_of_children" placeholder='No. of Children'></input>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <button type="submit" class="btn btn-book-modal">Book</button>
                </Modal>
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
