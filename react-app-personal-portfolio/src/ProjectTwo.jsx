import { useState, useEffect } from 'react';
import './ProjectTwo.css'

const ProjectTwo = ({ images, title, description, languages, features}) => {
    const [current, setCurrent] = useState(0);
    //image slider
    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return(
        <div className="hproject">
            <p className="hprojectTitle">{title}</p>
            <div className="hprojectPanel">
                {/* IMAGES */}
                <div className="hprojectSlider" onClick={nextImage}>
                {images.map((imgObj, index) => (
                    <img
                    key={index}
                    src={imgObj.img}
                    alt={imgObj.alt}
                    className={`hsliderImg ${index === current ? 'active' : ''}`}
                    />
                ))}
                {/* DOT NAV */}
                <div className="hdotsContainer">
                    {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? 'active' : ''}`}
                        onClick={() => setCurrent(index)}
                    />
                    ))}
                </div>
                </div>
                {/* DESCRIPTION */}
                <div className="hprojectDescription">
                    {description.map((line) => (
                        <p>{line.text}<br></br></p>
                    ))}
                </div>
                {/* LANGUAGES */}
                <div className="hprojectLanguages">
                    <p>
                        {languages.map((language) => (
                            <p><b className="highlight">{language}</b></p>
                        ))}
                        <hr></hr>
                        {features.map((line) => (
                            <p><b className="highlight">{line.feature}</b></p>
                        ))}
                    </p>
                </div>
            </div>
        </div>
    );
}

ProjectTwo.defaultProps = {
    images: 'imagesOfProject',
    title: 'Project',
    description: 'n/a',
    languages: 'n/a',
    features: 'n/a',
};

export default ProjectTwo