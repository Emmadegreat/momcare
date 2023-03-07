import '../styles/register.css'

import React,  {useState} from 'react'

import { TextField } from '@mui/material';

const Register = () => {

  const [isModalOpened, setIsModalOpened] = useState(false);
  const Open = () => setIsModalOpened(!isModalOpened);
  const Close = () => setIsModalOpened(false);

  return (
    <div className='register'>
      <form action="" className='signup-form'>
        <h4>Get Started</h4>


        <TextField
          required
          sx={{ m: 1, width: '70%' }}
          id="outlined-text-input"
          label="Enter Your Name"
          type="text"
          autoComplete="current-username"
        />

        <TextField
          required
          sx={{ m: 3, width: '70%', height:"6ch" }}
          id="outlined-password-input"
          label="Enter Your Password"
          type="password"
          autoComplete="current-password"
        />

        <TextField
          required
          sx={{ m: 3, width: '70%', height:"6ch" }}
          id="outlined-email-input"
          label="Enter Your Email"
          type="email"
          autoComplete="current-email"
        />

        <div className='checkbox-wrapper'>
          <input type="checkbox" name="checkbox" id='checkbox'/>
          <span>I agree to the processing of<a href="data_protection"> Personal data</a></span>
        </div>
        <button className='button' type='submit'>Sign Up</button>
        <span id='reg-link'>Already have an account? <a href="register">Sign In</a></span>
      </form>
    </div>
  )
}

export default Register
