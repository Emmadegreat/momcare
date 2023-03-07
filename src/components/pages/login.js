import '../styles/login.css'

import React,  {useState} from 'react'

import { TextField } from '@mui/material';

//import IconButton from '@mui/material/IconButton';

const Login = () => {

  const [forgotpass, setForgotPass] = useState(false);
  const openPass = () => setForgotPass(!forgotpass);
  const closePass = () => setForgotPass(false);
  return (
    <div className='login'>
      <form action="" className='loginForm'>
        <h4>Welcome Back</h4>


        <TextField
          required
          sx={{ m: 1, width: '70%' }}
          id="outlined-text-input"
          label="Enter Your Name"
          type="text"
          autoComplete="current-username"
          placeholder="Enter Your Name"
        />

        <TextField
          required
          sx={{ m: 3, width: '70%', height:"6ch" }}
          id="outlined-password-input"
          label="Enter Your Password"
          type="password"
          autoComplete="current-password"
        />

        {/*<FormControl sx={{ m: 1, width: '70%' }} variant="standard" placeholder='Password'>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            endAdornment={
              <InputAdornment position="end">
                </InputAdornment>
              }
            type="password"
            placeholder='Password'
          />
        </FormControl><br />*/}
        <span>
          <a href="../pages/register.js" id='forgot-password' onClick={openPass}>Forgot Password?</a>
        </span>

        <button className='button' type='submit'>Sign In</button>

        <span id='reg-link1'>Don't have an account?  <a href="sign-up" id='sign-up'>  Sign Up</a>
        </span>

    </form>
    </div>
  )
}

export default Login
