import "antd"
import 'antd/dist/reset.css';

import { Button, Carousel } from "antd";
import { Link, Route, Router, Routes } from "react-router-dom";

import Login from "./login";
import React from 'react'
import carousel  from '../images/carousel (1).png'
import carousel1 from '../images/carousel (2).png'
import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Slider = () => {
    const ref = useRef();


    return (
        <div style={{ height: "300px", width: "100%", color: "#000" }}>

            <Carousel
                style={{textAlign:"center"}}
                dots={true}
                autoplay={true}
                dotPosition="bottom"
                pauseOnDotsHover={false}
                pauseOnHover={false}
                //draggable={false}
                ref={ref}
            >
                <div style={{ backgroundColor: "red" }}>
                    <img src={carousel} alt={ carousel} style={{width:"100%", height:"100%"}} />

                    <p style={{
                            lineHeight: "1.6",
                            width: "100%",
                            color: "#000",
                            textAlign:"start",
                            padding: "2rem 1rem"
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis omnis iusto cumque qui quasi nulla, praesentium et quidem illo. Exercitationem, non. Laborum saepe quos dignissimos, obcaecati ullam asperiores quo.</p>
                    <div style={{marginTop:"0rem", display:"flex", padding:"1rem", justifyContent:"space-between" }}>
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
                <div style={{ backgroundColor:"red" }}>
                    <img src={carousel1} alt={ carousel1} style={{width:"100%", height:"100%"}} />

                    <p style={{
                        lineHeight: "1.6",
                        //backgroundColor:"red",
                        width: "100%",
                        color: "#000",
                         textAlign:"start",
                        padding: "2rem 1rem"
                    }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni reiciendis omnis iusto cumque qui quasi nulla, praesentium et quidem illo. Exercitationem, non. Laborum saepe quos dignissimos, obcaecati ullam asperiores quo.</p>
                    <div style={{marginTop:"1rem", padding:"1rem", display:"flex", justifyContent:"space-between" }}>
                        <Button>
                            <a href="./welcome" target="_blank" rel="noreferrer">skip</a>
                        </Button>
                        <Button>
                            <a href="./welcome" role="noreferrer">Next</a>
                        </Button>
                    </div>
                </div>

            </Carousel>

            <div
                className="controls"
                style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-between",
                    padding: "1rem"
                }}
            >

                {/*<Button
                    style={{ margin: "0rem 0.5rem" }}
                    onClick={() => { ref.current.goTo(0) }}
                >
                    reset
                </Button>*/}

            </div>

        </div>
    )
}

export default Slider
