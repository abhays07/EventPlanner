import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { LoginButton } from './components/pages/LoginButton';
import About from './components/pages/About';
import Register from './components/pages/Register';
import {Toaster} from "react-hot-toast";
import Bottom from './components/Bottom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact';
import UserDashboardEdit from './components/pages/userDashboardEdit';
// import UserDashboard from './components/pages/UserDashboard';
import CustomerDashboard from './components/pages/CustomerDashboard';
import AdminPanel from './components/pages/AdminPanel';

const App = () => {
  return (

    <>
        <BrowserRouter>
        <Toaster/>
           <Navbar/>
          
            <Routes>
               <Route path="/" element={<Home/>}/>
               <Route path="/About" element={<About/>}/>
               <Route path="/LoginButton" element={<LoginButton/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Contact" element={<Contact/>}/>
                <Route path="/userDashboardEdit" element={<UserDashboardEdit />} />
                <Route path="/CustomerDashboard" element={<CustomerDashboard/>}/>
                <Route path="/AdminPanel" element={<AdminPanel/>}/>
            </Routes>
            <Bottom/>
        </BrowserRouter>
    </>
  )
}

export default App