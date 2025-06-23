import React from 'react'
import image from "../assets/images/bghomephoto.png"
import { useNavigate } from 'react-router-dom';


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
                    </div>
                    
                    <button className=' bg-red-600 w-40 h-12 rounded-2xl text-center text-white ml-140 absolute -mt-40  ' onClick={()=> navigate('/LoginButton')}>Login</button>
                    <button className=' bg-white w-40 h-12 rounded-2xl text-center text-red-600 ml-190 absolute -mt-40  ' onClick={()=> navigate('/LoginButton')}>Contact Us</button>
            </div>
        </>
  )
}

export default Home;