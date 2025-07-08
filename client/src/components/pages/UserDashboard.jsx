import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import api from '../../config/api';

const UserDashboard = () => {
  const [userdata,setuserdata] = useState(""
    
  );
   
  const fetchUserData= async()=>{
    try {
      const res = await api.get("/user/profile");
      setuserdata(res.data.data)
      toast.success(res.data.message);
    } catch (error) {
       toast.error(
        `Error : ${error.response?.status || error.message} ${
          error.response?.data.message || ""
        }`
      )
    }
  
  }
  useEffect(()=>{
      fetchUserData();
      
  },[]);
  return (
    <>
      <div className=' flex flex-col items-center justify-center -mt-50 h-60 bg-red-800'>
      </div>
      <div className=' bg-gray-200'>
         <h1 className=' text-6xl w-full text-center font-bold '>User Dashboard</h1>
        <p className='text-2xl w-full text-center'>Welcome to your dashboard</p>
      </div>
      <div className=' bg-white m-5 border mx-auto my-5 w-[25%] p-6 rounded-lg shadow-md grid  justify-around gap-5 '>
        <h3><b>Name : </b> {userdata.fullname}</h3>
        <h3><b>Email : </b> {userdata.emaill}</h3>
        <h3><b>Phone : </b> {userdata.number}</h3>
       
      </div>
    </>
  )
}

export default UserDashboard