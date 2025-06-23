import React from 'react'
import {Link} from "react-router-dom"
import image from "../assets/images/aslogo.png.png"

const Navbar = () => {
  return (
        <>
                <div className='headerline bg-transparent flex text-white justify-center items-center gap-10 text-xl sticky top-0 z-99 '>
                        
                       <Link to="/About">About</ Link>
                       <Link to="/Stories">Stories</ Link>
                       <Link to="/MorePages">More Pages</ Link>
                       <a href=""> <img className='w-30' src={image} alt="" /> </a>
                       <Link to="/Services">Services</ Link>
                       <Link to="/Gallery">Gallery</ Link>
                       <Link to="/Elements">Elements</ Link>
                       <Link to="/Contact">Contact</ Link>

                </div>
        </>
  )
}

export default Navbar