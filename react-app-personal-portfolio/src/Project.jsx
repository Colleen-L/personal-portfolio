import { useState, useEffect } from 'react';
import './Project.css'

const Project = ({ images, title, description, languages, features}) => {
    const [current, setCurrent] = useState(0);
    //image slider
    const nextImage = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    return(
        <div className="project">
            <p className="projectTitle">{title}</p>
            <div className="projectPanel">
                {/* IMAGES */}
                <div className="projectSlider" onClick={nextImage}>
                {images.map((imgObj, index) => (
                    <img
                    key={index}
                    src={imgObj.img}
                    alt={imgObj.alt}
                    className={`sliderImg ${index === current ? 'active' : ''}`}
                    />
                ))}
                {/* DOT NAV */}
                <div className="dotsContainer">
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
                <div className="projectDescription">
                    {description.map((line) => (
                        <p>{line.text}<br></br></p>
                    ))}
                </div>
                {/* LANGUAGES */}
                <div className="projectLanguages">
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

Project.defaultProps = {
    images: 'imagesOfProject',
    title: 'Project',
    description: 'n/a',
    languages: 'n/a',
    features: 'n/a',
};

export default Project