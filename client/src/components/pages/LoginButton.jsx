import React from 'react'
import bg from "../pages/image/bg-homepage.png"

export const LoginButton = () => {
  return (

    <>
        <div className=''>
              <div className=' flex'>
                <img className=' -mt-30 blur-md ' src={bg} alt="" />
                <div className=' absolute ml-130 rounded-2xl mt-20 bg-red-800 h-110 w-120'>
                     <h3 className=' text-center text-white text-3xl mt-8 '><u>Login</u></h3>
                     <input className='text-black p-2 rounded-sm w-70 border-b-2 mt-10 ml-25 bg-white' type="email" placeholder='Enter your email' />
                     <input className='text-black p-2 rounded-sm w-70 border-b-2 mt-8 ml-25 bg-white' type="password" placeholder='Enter your password' />
                    <div>
                       <button className=' bg-white p-2 text-red-800 ml-40 mt-10 rounded-sm w-40 h-10 text-lg'>Login</button>
                    </div>
                    <div className=' mt-3 ml-25 text-white'>Don't have an Account ?  <a href="/Register">Register Now</a> </div>

                </div>
              </div>
        </div>
    </>
  )
}
export default LoginButton;