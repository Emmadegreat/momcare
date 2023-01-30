import '../styles/welcome.css'

import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import React, { Fragment, useState } from 'react'

import Modal from './modal'
import group from '../images/Group 33806 (1).png'
import logo from '../images/logo.png'
import signupwith from '../images/signupwith.png'

const Welcome = () => {

    const [isModalOpened, setIsModalOpened] = useState(false);
    const Open = () => setIsModalOpened(!isModalOpened);
    const Close = () => setIsModalOpened(false);

    const [signIn, setSignIn] = useState(false);
    const openSignIn = () => setSignIn(!signIn);
    const closeSignIn = () => setSignIn(false);

    const [welcome, setWelcome] = useState(false);
    const Closewelcome = () => setWelcome(false);

    return (

        <div className='welcome'>
            <div>
                <div className="logo-wrapper">
                <img src={logo} alt={ logo.name} />
                </div>
                <div className='group'>
                <article>
                    <h3>Welcome</h3>
                    <p>Enter your personal details to your <br /> patients account</p>
                </article>
                </div>
                <div className="bottom-links">
                <span href="../pages/login.js" className="link sign-in" onClick={openSignIn}>sign in</span>
                    <span href="../pages/register" className="link sign-up" onClick={ Open }>sign up</span>
                </div>
            </div>

             {/*========register modal============*/}
            {isModalOpened &&
                <Modal onClose={Close}>
                    <form action="">
                        <h4>Get Started</h4>
                        <legend>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name='fullname' placeholder='Enter your name' />
                        </legend>
                        <legend>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Enter your password' />
                        </legend>
                        <legend>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Enter your email' />
                        </legend>
                        <div className='checkbox-wrapper'>
                            <input type="checkbox" name="checkbox" id='checkbox'/>
                            <span>I agree to the processing of<a href="data_protection"> Personal data</a></span>
                        </div>

                        <button type='submit'>Sign Up</button>
                        <p id='sign-para'>_________<span id='sign'>Sign Up with</span>________</p>

                        <div className="signup-wrapper">
                            <a href=""><FaFacebook/></a>
                            <a href=""><FaGoogle/></a>
                            <a href=""><FaGithub/></a>
                            <a href=""><FaTwitter/></a>
                        </div>
                        <span id='reg-link'>Already have an account? <a href="register">Sign In</a></span>
                    </form>
                </Modal>

            }

            {/*========login modal============*/}
            {signIn &&
                <Modal onClose={closeSignIn}>
                    <form action="" className='loginForm'>
                        <h4>Welcome Back</h4>
                        <legend>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name='fullname' placeholder='Enter your name' />
                        </legend>
                        <legend>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Enter your password' />
                        </legend>

                        <span>
                            <a href="forgot-password" id='forgot-password'>Forgot Password?</a>
                        </span>

                        <button type='submit'>Sign In</button>

                        <span id='reg-link1'>Don't have an account?  <a href="sign-up" id='sign-up'>  Sign Up</a>
                        </span>

                        <p id='sign-para'>_________<span id='sign'>Sign In with</span>________</p>

                        <div className="signup-wrapper">
                            <a href=""><FaFacebook/></a>
                            <a href=""><FaGoogle/></a>
                            <a href=""><FaGithub/></a>
                            <a href=""><FaTwitter/></a>
                        </div>
                    </form>
                </Modal>

            }

            <Modal onClose={ Closewelcome}>
                <div>
                    <h3>Hellow user!, how do you want to sign in?</h3>

                    <span></span>
                </div>
            </Modal>

        </div>

    )
}

export default Welcome
