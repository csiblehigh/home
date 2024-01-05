// ImageSetup.js
import React from 'react';
import images from './images';  
const ImageSetup = () => {
    return (
        <div className="imageSetup">
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image.src} alt={image.alt} />
                </div>
            ))}
        </div>
    );
};

export default ImageSetup;
