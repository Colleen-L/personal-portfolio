import { useState, useEffect } from 'react';

const Project = ({ images, title, description, languages, features}) => {
    
    //image slider

    return(
        <div className="project">
            <p className="projectTitle">{title}</p>
            <div className="projectPanel">
                <div className="projectSlider">

                    {/* code starts here */}
                    
                </div>
                <div className="projectDescription">
                    {description.map((line) => (
                        <p>{line.text}<br></br></p>
                    ))}
                </div>
                <div className="projectLanguages">
                    <p>
                        {languages.map((line) => (
                            <p><b className="highlight">{line.language}</b></p>
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