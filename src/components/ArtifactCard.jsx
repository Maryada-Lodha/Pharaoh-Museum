import React from 'react';
import './styles/ArtifactCard.css';

const ArtifactCard = (props) => {
    return (
        <div className='col-lg-4 col-md-6 col-sm-6 artifact-container'>
            <img className="artifact-image" src={props.artifactImage} alt={props.altText} />
            <p className='artifact-description'>
                <h2 className='artifact-name'>Lourem Ipsum</h2>
                Lorem ipsum dolor sit amet consectetur. Lectus nunc neque tellus pharetra sit bibendum porttitor
            </p>

        </div>
    );
};

export default ArtifactCard;
