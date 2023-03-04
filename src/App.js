import './components/styles/app.css'

import { Route, Router, BrowserRouter as Routes } from 'react-router-dom'

import { Button } from 'antd';
import Login from './components/pages/login'
//import Modal from './components/pages/modal'
import React from 'react'
import Register from './components/pages/register'
import Slider from './components/pages/slider';
import Welcome from './components/pages/welcome';

function App() {

  return (

    <div>
      <Slider />

    </div>



  );
}

export default App;
