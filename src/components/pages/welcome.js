import '../styles/welcome.css'

import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import React, { useState } from 'react'

import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Modal from './modal'
import Modal1 from './modal1'
import Modal2 from './modal2';
import NativeSelect from '@mui/material/NativeSelect'
import { Select } from '@mui/material'
import { Stack } from '@mui/system';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import group from '../images/Group 33806 (1).png'
import logo from '../images/logo.png'
import signupwith from '../images/signupwith.png'
import { useFormControl } from '@mui/material/FormControl';

const Welcome = () => {

  const [isModalOpened, setIsModalOpened] = useState(false);
  const Open = () => setIsModalOpened(!isModalOpened);
  const Close = () => setIsModalOpened(false);

  const [signIn, setSignIn] = useState(false);
  const openSignIn = () => setSignIn(!signIn);
  const closeSignIn = () => setSignIn(false);

  const [welcome, setWelcome] = useState(false);
  const openWelcome = () => setWelcome(!welcome);
  const Closewelcome = () => setWelcome(false);

  const [forgotpass, setForgotPass] = useState(false);
  const openPass = () => setForgotPass(!forgotpass);
  const closePass = () => setForgotPass(false);


    //const [showPassword, setShowPassword] = useState(false);

  //const handleClickShowPassword = () => setShowPassword(showPassword);

  //const handleMouseDownPassword = (event) => {
    //event.preventDefault();
  //};

    return (

      <div className='welcome'>
        <div>
          <div className="logo-wrapper">
            <img src={logo} alt={ logo.name} />
          </div><br />
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
        {/*isModalOpened &&
          <Modal onClose={Close}>
            <form action="">
              <h4>Get Started</h4>

                        <FormControl sx={{ m: 1, width: '26ch' }} variant="standard" placeholder='Full name'>
                            <InputLabel htmlFor="standard-adornment-fullname">Fullname</InputLabel>
                            <Input
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton

                                        >
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder='Full name'
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '26ch' }} variant="standard" placeholder='Password'>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton

                                        >
                                        </IconButton>
                                    </InputAdornment>
                                }
                                type="password"
                                placeholder='Password'
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '26ch' }} variant="standard" placeholder='Email'>
                            <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
                            <Input
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton

                                        >
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder='Email'
                                type="email"
                            />
                        </FormControl>

                        {/*<legend>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Enter your password' />
                        </legend>
                        <legend>
                            <label htmlFor="email">Email</label>
                            <input type="email" name='email' placeholder='Enter your email' />
                              </legend>}
                        <div className='checkbox-wrapper'>
                            <input type="checkbox" name="checkbox" id='checkbox'/>
                            <span>I agree to the processing of<a href="data_protection"> Personal data</a></span>
                        </div>

                        <button className='button' type='submit'>Sign Up</button>
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

              */}

            {/*========login modal============*/}
            {signIn &&
                <Modal onClose={closeSignIn}>
                    <form action="" className='loginForm'>
                        <h4>Welcome Back</h4>


                        <FormControl sx={{ m: 1, width: '26ch' }} variant="standard" placeholder='Full name'>
                            <InputLabel htmlFor="standard-adornment-fullname">Fullname</InputLabel>
                            <Input
                                endAdornment={
                                    <InputAdornment position="end">

                                    </InputAdornment>
                                }
                                placeholder='Full name'
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '26ch' }} variant="standard" placeholder='Password'>
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                endAdornment={
                                    <InputAdornment position="end">

                                    </InputAdornment>
                                }
                                type="password"
                                placeholder='Password'
                            />
                        </FormControl><br />
                        {/*<legend>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name='fullname' placeholder='Enter your name' />
                        </legend>
                        <legend>
                            <label htmlFor="password">Password</label>
                            <input type="password" name='password' placeholder='Enter your password' />
                              </legend>*/}

                        <span>
                            <a href="forgot-password" id='forgot-password' onClick={openPass}>Forgot Password?</a>
                        </span>

                        <button className='button' type='submit'>Sign In</button>

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

            {welcome &&
                <Modal1 Stop={Closewelcome}>
                    <div>
                        <h1>Hellow user!!</h1>
                        <p>How do you want to be signed in</p>
                        <button><a href="doctor"> Doctor</a></button><br />
                        <button><a href="register"> Patient </a></button>
                    </div>
                </Modal1>
            }

          {/*==========forgot password modal==========}
          {forgotpass &&
          <Modal2 closedPass={closePass}>
            <form action="" className='forgotPassword-form'>
              <h4>Forgot Password</h4>

              <p>Enter your mobile number to receive a verification code</p>
              <FormControl sx={{ m: 1, width: '26ch' }} variant="standard">
                <InputLabel variant="standard" htmlFor="mobile-number">Mobile number</InputLabel>
                <NativeSelect
                  value="Nigeria"
                  inputProps={{
                    name: 'mobile-number',
                    id: 'mobile-number',
                  }}
                >
                  <option value="Ghana">+144</option>
                  <option value="UK">+224</option>
                  <option value="Nigeria" style={{ opacity: "50%" }}>+234</option>
                </NativeSelect>
              </FormControl>
              <button className='button' type='submit'>Send</button>

            </form>
          </Modal2>
        }

        {/*=============OTP==============*/}

        {/*forgotpass &&
          {<Modal2 closedPass="">
            <form action="" className='otp-form'>
              <h4>Enter OTP</h4>

              <p>Please enter verification code that was sent to your mobile number +2347034534697</p>
              <div className="button-group">
                <button className='otp-btn'></button>
                <button className='otp-btn'></button>
                <button className='otp-btn'></button>
                <button className='otp-btn'></button>
                <button className='otp-btn'></button>
                <button className='otp-btn'></button>
              </div>
              <div className="resend">
                <a href="resend-code" id='resend1'>Resend code</a>
                <a href="resend-code" id='resend2'>Change Number</a>
              </div>
              <button className='button' type='submit'>Continue</button>

            </form>

          </Modal2>
        */}

        {/*========change password============}

        {//forgotpass &&
          <Modal2>
            <form action="" className='newpasswordForm'>
              <h4>Enter new password</h4>
              <FormControl sx={{ m: 1, width: '26ch' }} variant="standard">
                <InputLabel htmlFor="standard-adornment-newPasswprd">Enter password</InputLabel>
                <Input
                  endAdornment={
                    <InputAdornment position="end">

                    </InputAdornment>
                  }
                  placeholder='Enter your new password'
                />
              </FormControl>


              <Stack>
                <TextField
                  sx={{ m: 1, width: '26ch' }}
                  placeholder='Re enter your new password'
                  variant='standard'
                  type="password"
                  label="Confirm password"
                  helperText="Both passwords must match"
                />
              </Stack>

              <button className='button' type='submit'>Submit</button>
            </form>
          </Modal2>

                */}

      </div>

    )
  }

export default Welcome
