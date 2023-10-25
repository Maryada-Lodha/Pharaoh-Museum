import React from "react";
import Header from "./Header";
import ArtifactGrid from './ArtifactGrid';
import galleryImg from '../assets/images/gallery-bg-img.png';

function GalleryPage() {
    return <div>
        <Header bgImg={galleryImg} headerText="Gallery" />    
        <ArtifactGrid />
        </div>
}

export default GalleryPage;