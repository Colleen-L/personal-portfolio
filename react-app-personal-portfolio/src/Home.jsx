import React, {useState, useEffect, useRef} from 'react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false); //if element is visible
    const elementReference = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true); //element is visible --> triggers animation
                    observer.unobserve(entry.target); //stops observing
                }
            });
        }, {threshold: 0.5}); //occurs with 0.5 of element is visible

        //observes element
        if (elementReference.current) {
            observer.observe(elementReference.current);
        }

        //stops observing
        return () => {
            if (elementReference.current) {
                observer.unobserve(elementReference.current);
            }
        };
    }, [isVisible]); //runs again if 'hasAnimated' changes

    // HTML
    return(
        <div className = "home">
            <div className = "homeContainer">
                <div className = "pfp">
                    <img src= "./pfp.png"></img>
                </div>
                <div className = "homeMessage">
                    <p className = "hello">Hi, I'm <b className="highlight">Colleen</b>!</p>
                    <hr ref = {elementReference} 
                    className = {`homeSplit ${isVisible ? 'visible' : ''}`}></hr>
                    <p className ="homeStatement">An <b className="highlight">aspiring</b> data scientist 
                    <br></br>hoping to use data to help the world.</p>
                </div>
            </div>
        </div>
    );
};

export default Home