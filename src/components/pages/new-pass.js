import '../styles/new-pass.css'

import React,  {useState} from 'react'

import { TextField } from '@mui/material';

//import IconButton from '@mui/material/IconButton';

const NewPass = () => {


  return (
    <div className='new-pass'>
      <form action="" className='new-pass-form'>
        <h4>Enter New Password</h4>


        <TextField
          required
          sx={{ m: 1, width: '70%' }}
          id="outlined-text-input"
          label="Enter New Password"
          type="password"
          autoComplete="current-password"
        />

        <TextField
          required
          sx={{ m: 3, width: '70%', height:"6ch" }}
          id="outlined-password-input"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />

        <button className='button' type='submit'>Submit</button>

    </form>
    </div>
  )
}

export default NewPass
