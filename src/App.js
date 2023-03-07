import './components/styles/app.css'

import { Route, Router, BrowserRouter as Routes } from 'react-router-dom'

import { Button } from 'antd';
import ForgotPass from './components/pages/forgot-pass'
import HelloUsers from './components/pages/hello-users';
import Login from './components/pages/login'
import NewPass from './components/pages/new-pass';
import Otp from './components/pages/otp';
import PasswdChanged from './components/pages/passwd-changed'
//import Modal from './components/pages/modal'
import React from 'react'
import Register from './components/pages/register'
import Slider from './components/pages/slider';
import Welcome from './components/pages/welcome';

function App() {

  return (

    <div>

      <PasswdChanged/>

    </div>



  );
}

export default App;
