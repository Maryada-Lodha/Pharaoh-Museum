import React from 'react';
import './styles/Navbar.css';
import logo from '../assets/images/pharaoh-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Navbar() {
    // Login UseState
    const [loginShow, setLoginShow] = useState(false);

    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);

    const handleSignupClick = () => {
        setLoginShow(false)
        setSignupShow(true)
    }

    // SignUp UseState
    const [signupShow, setSignupShow] = useState(false);

    const handleSignupClose = () => setSignupShow(false);
    // const handleSignupShow = () => setSignupShow(true);

    return <div>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img src={logo} alt="logo" height="24"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 navigations">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/event">Event</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/gallery">Gallery</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <p className='nav-link nav-link-yellow' onClick={handleLoginShow}>Login</p>

                            {/* Login Modal */}

                            <Modal
                                show={loginShow}
                                onHide={handleLoginClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <h1 className="modal-title">Login</h1>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="container">
                                        <form>
                                            <div className="row">
                                                <input type="email" class="form-control book-form-inputfield-lg" id="emailID" placeholder='Email Address'></input>
                                            </div>
                                            <div className="row">
                                                <input type="password" class="form-control book-form-inputfield-lg" id="phone_number" placeholder='Create Password'></input>
                                            </div>
                                        </form>
                                    </div>
                                </Modal.Body>
                                <p className='subtext'>Don't have an Account? <span className='spantext' onClick={handleSignupClick} > &nbsp; Sign Up </span></p>
                                <button type="submit" class="btn btn-modal">Login</button>
                            </Modal>

                            {/* Sign Up Modal */}

                            <Modal
                                show={signupShow}
                                onHide={handleSignupClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <h1 className="modal-title">Sign Up</h1>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="container">
                                        <form>
                                            <div className="row">
                                                <input type="text" class="form-control book-form-inputfield-sm" id="fname" placeholder='First Name'></input>
                                                <input type="text" class="form-control book-form-inputfield-sm" id="lname" placeholder='Last Name'></input>
                                            </div>
                                            <div className="row">
                                                <input type="number" class="form-control book-form-inputfield-sm" id="age" placeholder='Age'></input>
                                                <input type="number" class="form-control book-form-inputfield-sm" id="number" placeholder='Phone Number'></input>
                                            </div>
                                            <div className="row">
                                                <input type="email" class="form-control book-form-inputfield-lg" id="emailID" placeholder='Email Address'></input>
                                            </div>
                                            <div className="row">
                                                <input type="password" class="form-control book-form-inputfield-lg" id="phone_number" placeholder='Create Password'></input>
                                            </div>
                                            
                                        </form>
                                    </div>
                                </Modal.Body>
                                <button type="submit" class="btn btn-book-modal">Sign Up</button>
                            </Modal>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
}

export default Navbar;
