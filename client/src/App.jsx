import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { LoginButton } from './components/pages/LoginButton';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <>
        <BrowserRouter>
           <Navbar/>
           <Home/>
           <LoginButton/>
        </BrowserRouter>
    </>
  )
}

export default App