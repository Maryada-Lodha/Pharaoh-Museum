import React from "react";
import ArtifactCard from './ArtifactCard';
import artifactImage1 from '../assets/images/artifact-image-1.png';
import artifactImage2 from '../assets/images/artifact-image-2.png';
import artifactImage3 from '../assets/images/artifact-image-3.png';
import artifactImage4 from '../assets/images/artifact-image-4.png';
import artifactImage5 from '../assets/images/artifact-image-5.png';
import artifactImage6 from '../assets/images/artifact-image-6.png';
import artifactImage7 from '../assets/images/artifact-image-7.png';
import artifactImage8 from '../assets/images/artifact-image-8.png';
import artifactImage9 from '../assets/images/artifact-image-9.png';

function ArtifactGrid() {
    return <div className="container">
    <div className="row">
        <ArtifactCard artifactImage={artifactImage1} altText="Artifact 1"/>
        <ArtifactCard artifactImage={artifactImage2} altText="Artifact 2"/>
        <ArtifactCard artifactImage={artifactImage3} altText="Artifact 3"/>
        <ArtifactCard artifactImage={artifactImage4} altText="Artifact 4"/>
        <ArtifactCard artifactImage={artifactImage5} altText="Artifact 5"/>
        <ArtifactCard artifactImage={artifactImage6} altText="Artifact 6"/>
        <ArtifactCard artifactImage={artifactImage7} altText="Artifact 7"/>
        <ArtifactCard artifactImage={artifactImage8} altText="Artifact 8"/>
        <ArtifactCard artifactImage={artifactImage9} altText="Artifact 9"/>
    </div>
    
    </div>
}

export default ArtifactGrid;