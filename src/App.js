import './components/styles/app.css'

import { Route, Router, BrowserRouter as Routes } from 'react-router-dom'

import Login from './components/pages/login'
//import Modal from './components/pages/modal'
import React from 'react'
import Register from './components/pages/register'
import Welcome from './components/pages/welcome';

function App() {
  return (

    <div className="App">

        <Welcome />

      </div>


  );
}

export default App;
