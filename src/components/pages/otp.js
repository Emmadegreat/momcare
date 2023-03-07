import '../styles/otp.css'

import React,  {useState} from 'react'

import { TextField } from '@mui/material';

const Otp = () => {

  return (
    <div className='otp'>

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

    </div>
  )
}

export default Otp
