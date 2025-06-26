import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { LoginButton } from './components/pages/LoginButton';
import About from './components/pages/About';
import Register from './components/pages/Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact';

const App = () => {
  return (

    <>
        <BrowserRouter>
           <Navbar/>
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/LoginButton" element={<LoginButton/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App