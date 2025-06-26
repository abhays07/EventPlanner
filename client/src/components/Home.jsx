import React from 'react'
import image from "../assets/images/bghomephoto.png"
import { useNavigate } from 'react-router-dom';
import { BsChatSquareHeartFill } from "react-icons/bs";
import {Link} from "react-router-dom"
import logo from "../assets/images/aslogo.png.png"


const Home = () => {
  const navigate = useNavigate();
  return (
        <>
            <div className='homepage -mt-32 h-screen'>
                <img  className=' absolute -z-1 w-full' src={image} alt="" />
                           
                    <div className='grid justify-items-center items-center h-full'>
                              <h1 className=' text-white text-center absolute text-4xl mt-50 '>Crafting Indian Celebrations with 
                                <br /> Soul & Splendor
                            </h1>
                            <h4 className=' text-white text-center absolute text-2xl mt-100 ' >
                              "Bringing your dreams to life—one celebration at a time! 
                              <br />From grand weddings to colorful festivals, <br /> we craft every event with tradition, elegance, and a touch of magic."
                            </h4> 
                    </div>
                    
                    <button className=' cursor-pointer bg-red-600 w-40 h-12 rounded-2xl text-center text-white ml-140 absolute -mt-20  hover:bg-red-800 ' onClick={()=> navigate('/LoginButton')}>Login</button>
                    <button className=' cursor-pointer bg-white w-40 h-12 rounded-2xl text-center text-red-600 ml-190 absolute -mt-20  hover:bg-amber-400 hover:text-white ' onClick={()=> navigate('/Contact')}>Contact Us</button>
            </div>

            <div className='intro h-300 w-300 bg-red-800 mt-12 ml-40 justify-center flex'>
                    <div className='begin  '>
                             <a href="/"> <img className=' bg-red-950 w-50 shadow-lg mt-15 shadow-black  rounded-full' src={logo} alt="" /> </a>
                             <span className=' absolute text-white text-4xl mt-10 -ml-48'>Plan Your Beautiful Journey With Us</span>
                             <span className=' absolute text-white text-2xl text-center  -ml-80 mt-25'>Plan your beautiful journey with us—where every moment becomes a memory, <br /> and every detail reflects your story. From sacred vows to joyful dances, <br /> we make your celebrations truly unforgettable.</span>
                             
                    </div>

                    <div className='absolute h-170 w-150 bg-amber-500 mt-130 -ml-150 '>
                            <img src="" alt="" />
                    </div>
                    <div className='absolute h-85 w-150 bg-amber-800 mt-130 ml-150 '>
                            <img src="" alt="" />
                    </div>
                     <div className='absolute h-85 w-150 bg-amber-100 mt-215 ml-150 '>
                            <img src="" alt="" />
                    </div>
                    
                   

            </div>
        </>
  )
}

export default Home;