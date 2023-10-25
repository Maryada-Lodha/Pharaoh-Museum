import React from "react";
import Header from "./Header";
import Enquiry from "./Enquiry";
import contactImg from '../assets/images/contact-bg-img.png';

function ContactPage() {
    return <div>
        <Header bgImg={contactImg} headerText="Contact Us" />    
        <Enquiry />
        </div>
}

export default ContactPage;