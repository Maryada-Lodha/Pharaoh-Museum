import React from 'react';
import './styles/Footer.css';
import Icon from './Icon';
import logo from '../assets/images/pharaoh-logo.png';


function Footer() {
    return <div className='Footer'>
        <div class="container footer-box">
            <div class="row">
                <div class="col-lg-5 col-sm-12 column">
                    <div>
                        <img className='footer-logo-img' src={logo} alt='Pharaoh Logo'></img>
                    </div>
                    <div>
                        <p className='footer-description'>Lorem ipsum dolor sit amet consectetur. Lectus nunc neque tellus pharetra sit bibendum porttitor faucibus auctor. Adipiscing dictumst amet senectus commodo porta adipiscing. Lorem ipsum dolor sit amet consectetur. Lectus nunc neque tellus pharetra sit bibendum porttitor faucibus auctor. Adipiscing dictumst amet senectus commodo porta adipiscing.</p>
                    </div>
                    <Icon className='fa-brands fa-instagram fa-2x fa' />
                    <Icon className='fa-brands fa-square-facebook fa-2x fa' />
                    <Icon className='fa-brands fa-twitter fa-2x fa' />
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-5 col-sm-12 column">
                    <h2 className='sitemap-text'>Site Map</h2>
                    <p className='sitemap-components' href=''>About</p>
                    <p className='sitemap-components' href=''>Event</p>
                    <p className='sitemap-components' href=''>Gallery</p>
                    <p className='sitemap-components' href=''>Contact</p>
                    <form>
                        <input type="email" class="form-control inputfield" id="email" placeholder='Email Address'></input>
                        <button type="submit" class="btn btn-subscribe">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
        <p className='copyright'>Copyright © 2023</p>
    </div>
}

export default Footer;
