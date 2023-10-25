import React from "react";
import Header from "./Header";
import ImageBox from "./ImageBox";
import TextBox from "./TextBox";
import aboutImg from '../assets/images/about-bg-img.png';

function AboutPage() {
    return (<div>
        <Header bgImg={aboutImg} headerText="About Us" />
        <div className="container">
            <div className="row">
                <ImageBox />
                <TextBox heading="About the Mistrey History of Egypt" />
            </div>
        </div>
        <div className="container">
            <div className="row">
                <TextBox heading="More About History of Egypt" />
                <ImageBox />
            </div>
        </div>
    </div>)
}

export default AboutPage;