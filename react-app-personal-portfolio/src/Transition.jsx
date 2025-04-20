import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const imagesOne = [
    {
        img: "./css.png",
        description: "CSS",
    },
    {
        img: "./dart.png",
        description: "Dart",
    },
    {
        img: "./django.png",
        description: "Django",
    },
    {
        img: "./flutter.png",
        description: "Flutter",
    },
    {
        img: "./github.png",
        description: "Github",
    },
    {
        img: "./html.png",
        description: "HTML",
    },
    {
        img: "./intellij.png",
        description: "IntelliJ",
    },
];

const imagesTwo = [
    {
        img: "./java.png",
        description: "Java",
    },
    {
        img: "./javascript.png",
        description: "JavaScript",
    },
    {
        img: "./jupyter.png",
        description: "Jupyter",
    },
    {
        img: "./language.png",
        description: "Multilingual",
    },
    {
        img: "./python.png",
        description: "Python",
    },
    {
        img: "./react.png",
        description: "React",
    },
    {
        img: "./vscode.png",
        description: "VSCode",
    },
];

function Transition() {

    //slider
    const settingsOne = {
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
        dots: false,
        arrows: false,
        cssEase: 'ease-in-out',
        swipeToSlide: true,
        rtl: true,
    };

    const settingsTwo = {
        infinite: true,
        speed: 1500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 300,
        dots: false,
        arrows: false,
        cssEase: 'ease-in-out',
        swipeToSlide: true,
        rtl: false,
    };

    return(
      <div className="container">
         <div className = "slider">
            <Slider {...settingsOne}>
                {imagesOne.map((item) => (
                    <div className="cards">
                        <div className="card" style={{
                            width: '100px',
                            marginTop: '10px',
                            marginLeft: '20px',
                            marginRight: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            textAlign: 'center',
                            alignItems: 'center',
                        }}>
                            <img src={item.img} alt="" 
                            style={{
                                width: '40px',
                            }}></img>
                            <p style={{
                                fontSize: '12px',
                                color: 'black',
                                textDecoration: 'bolder',
                            }}> {item.description} </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        <div className = "slider">
            <Slider {...settingsTwo}>
                    {imagesTwo.map((item) => (
                        <div className="cards">
                            <div className="card" style={{
                                width: '100px',
                                margin: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'center',
                                alignItems: 'center',
                            }}>
                                <img src={item.img} alt="" 
                                style={{
                                    width: '40px',
                                }}></img>
                                <p style={{
                                    fontSize: '12px',
                                    color: 'black',
                                    textDecoration: 'bolder',
                                }}> {item.description} </p>
                            </div>
                        </div>
                    ))}
                </Slider>
        </div>

        {/* <div className="arrows">
            <img className="arrowOne" src="./down2.png"></img>
            <img className="arrowTwo" src="./down2.png"></img>
        </div> */}

      </div>
    );

}

export default Transition