import "antd"
import 'antd/dist/reset.css';
import '../styles/slider.css'

import { Button, Carousel } from "antd";
import { Link, Route, Router, Routes } from "react-router-dom";

import Login from "./login";
import React from 'react'
import carousel  from '../images/carousel (1).png'
import carousel1 from '../images/carousel (2).png'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Slider = () => {
    const ref = useRef();


    return (
        <div className="slider">

            <Carousel
                dots={true}
                //autoplay={true}
                dotPosition="bottom"
                pauseOnDotsHover={false}
                pauseOnHover={false}
                draggable={false}
                ref={ref}
            >
                <div className="slider-container">
                    <img src={carousel} alt={carousel} />
                    <h3>
                        BOOK YOUR NEXT DOCTOR’S <br /> APPOINTMENT WITH EASE
                    </h3>

                    <p>
                        With the Digidoc App your next doctor’s appointment is
                        just a button away saving you time and money.
                    </p>
                    <div className="buttons">
                        <Button

                        >
                            <a href="./welcome" target="_blank" rel="noreferrer">skip</a>
                        </Button>
                        <Button
                            onClick={()=>{ref.current.next()}}
                        >
                            next
                        </Button>
                    </div>
                </div>
                <div className="slider-container">
                    <img src={carousel1} alt={ carousel1} />

                    <h3>
                        BOOK YOUR NEXT DOCTOR’S <br /> APPOINTMENT WITH EASE
                    </h3>

                    <p>
                        With the Digidoc App your next doctor’s appointment is
                        just a button away saving you time and money.
                    </p>
                    <div className="buttons">
                        <Button>
                            <a href="./welcome" target="_blank" rel="noreferrer">skip</a>
                        </Button>
                        <Button>
                            <a href="./welcome" role="noreferrer">Next</a>
                        </Button>
                    </div>
                </div>

            </Carousel>

        </div>
    )
}

export default Slider
