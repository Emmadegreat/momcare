import '../styles/home.css'

import carousel_img from '../images/carousel (2).png'

//import { useNavigate } from 'react-router-dom'

//import React,  {useState} from 'react'

//import { TextField } from '@mui/material';


const Home = () => {
    //const navigate = useNavigate();

    return  (
        <div className='home'>
            <section className="first-sect">
                <h4>Hello Prisca,</h4>
                <p>How are you feeling today?</p>
                <i>Your Estimated due date is 21st June, 2023, 1st trimester</i>
            </section>
            <section className="carousel-sect">
                <div className="card">
                    <img src={carousel_img} alt="carousel-imgage" />
                    <p>
                        At 10 weeks, the embryo is about the size of small cherry
                        and it is now officially referred to as a fetus. Yippee!!
                    </p>
                </div>
            </section>
            <section className="tip-sect">
                <div className="card">
                    <h4>Tip for today</h4>
                    <p>
                        Eating a varity of healthy foods, including fruits, vegetables,
                        whose grains, and lean protein, can ensure that you are getting
                        the nutrients that you and your baby needs.
                    </p>
                </div>
            </section>
            <section className="today-sect">
                <h4>What do you want to do today?</h4>
                <div className="card">
                    <button className='today-btn' id='btn-1' onClick="">Baby Growth monitor</button>
                    <button className='today-btn' id='btn-2' onClick="">Consult a Doctor</button>
                    <button className='today-btn' id='btn-3' onClick="">Emergency Service</button>
                    <button className='today-btn' id='btn-4' onClick="">Lifestyle Tips</button>
                </div>
            </section>
            <section className="upcoming-appointment-sect">
                <h4>Upcoming Appointment</h4>
                <div className="card">
                    <img src={carousel_img} alt="doctor-imgage" />
                    <div className='doctor'>
                        <b>Dr. Nora Benson</b>
                        <p>General Doctor <br />
                        12, Surulere, Lagos State</p>
                    </div>
                </div>
                <hr id='hr'/>
                <div className='date'>
                    <input type="date" style={{background:"#ded9d9"}}/>
                    <input type="time" style={{background:"#ded9d9"}}/>
                </div>
            </section>
            <section className="available-doc-sect">
                <div className='card-header'>
                    <h4>Available Doctors Near you</h4>
                    <a href="./#">View All</a>
                </div>

                <div className="card">
                    <img src={carousel_img} alt="doctor-imgage" />
                    <div className='doctor'>
                        <b>Dr. Akin Johnson</b>
                        <p>
                            Dentist<br />
                            12, Ajadi Lagos State <br /> <small>7 slots left</small>
                        </p>
                    </div>
                    <a href="./profile">View Profile</a>
                </div>
                <div className="card">
                    <img src={carousel_img} alt="doctor-imgage" />
                    <div className='doctor'>
                        <b>Dr. Akin Johnson</b>
                        <p>
                            Dentist<br />
                            12, Ajadi Lagos State <br /> <small>7 slots left</small>
                        </p>
                    </div>
                    <a href="./profile">View Profile</a>
                </div>
            </section>
            <section className="last-sect">
                <h4>Tip for today</h4>
                <div className="card">
                    <p>
                        Eating a varity of healthy foods, including fruits, vegetables,
                        whose grains, and lean protein, can ensure that you are getting
                        the nutrients that you and your baby needs.
                    </p>
                </div>
            </section>

        </div>
    )
}

export default Home
