import '../styles/forgot-pass.css'

import React,  {useState} from 'react'

import { TextField } from '@mui/material';

const ForgotPass = () => {

    const [forgotpass, setForgotPass] = useState(false);
    const openPass = () => setForgotPass(!forgotpass);
    const closePass = () => setForgotPass(false);


  return (
    <div className='forgot-pass'>

        <form action="" className='forgot-pass-form'>
            <h4>Forgot Password</h4>

            <p>Enter your mobile number to receive a verification code</p>

              <TextField
                required
                sx={{ m: 3, width: '70%', height:"6ch" }}
                id="outlined-number-input"
                label="Enter Your Mobile Number"
                type="number"

                autoComplete="current-number"
            />
            <button className='button' type='submit'>Send</button>

        </form>
    </div>
  )
}

export default ForgotPass
