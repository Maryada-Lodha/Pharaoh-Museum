import React from "react";
import './styles/ImageBox.css';
import scriptImg from '../assets/images/script-img.png';

function ImageBox() {
    return <div className='col-lg-6 col-md-6 col-sm-6 image-container'>
        <img className="container imagebox" src={scriptImg} alt="script-img"></img>
    </div>
}

export default ImageBox;