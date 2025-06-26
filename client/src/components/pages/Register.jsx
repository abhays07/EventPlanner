import React from 'react'
import bg from "../pages/image/bg-homepage.png"

function Register() {
  return (
        <>
             <div className=''>
                           <div className=' flex'>
                             <img className=' -mt-30 blur-md ' src={bg} alt="" />
                             <div className=' absolute ml-120 rounded-2xl mt-15 bg-red-800 h-150 w-135'>
                                  <h3 className=' text-center text-white text-4xl mt-8 '><u>Create Your Account</u></h3>
                                   <input className='text-black p-2 rounded-sm w-75 border-b-2 mt-10 ml-30 bg-white' type="text" placeholder='Enter your Full Name' />
                                  <input className='text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white' type="email" placeholder='Enter your email' />
                                   <input className='text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white' type="tel" placeholder='Enter your phone number' />
                                  <input className='text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white' type="password" placeholder='Enter your password' />
                                  <input className='text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white' type="password" placeholder='Confirm your password' />
                                 <div>
                                    <button className=' bg-white p-2 text-red-800 ml-48 mt-10 rounded-sm w-40 h-10 text-lg'>Register Now</button>
                                 </div>
                                 <div className=' mt-3 ml-35 text-white'>Already have an Account ?  <a href="/LoginButton">Login Now</a> </div>
             
                             </div>
                           </div>
                     </div>
        </>
  )
}

export default Register