
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/api";
import { CiEdit } from "react-icons/ci";

const UserDashboard = () => {
  const [userdata, setuserdata] = useState("");

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setuserdata(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} ${
          error.response?.data.message || ""
        }`
      );
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <>
      <div className=" flex flex-col items-center justify-center -mt-50 h-60 bg-red-800"></div>
      <div className=" bg-gray-200">
        <h1 className=" text-6xl w-full text-center font-bold ">
          User Dashboard
        </h1>
        <p className="text-2xl w-full text-center">Welcome to your dashboard</p>
      </div>
      <div className=" relative flex  justify-center items-center gap-20 w-[50%]  bg-white m-5 border mx-auto my-5 p-6 rounded-lg shadow-md    ">
        <div className="  ">
          <img className=" w-50 h-50 object-cover border  rounded-full " src={userdata.photo} alt="" />
        </div>
        <div className=" grid justify-around gap-10">
          <h3>
            <b>Name : </b> {userdata.fullname}
          </h3>
          <h3>
            <b>Email : </b> {userdata.emaill}
          </h3>
          <h3>
            <b>Phone : </b> {userdata.number}
          </h3>
        </div>
        <button className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
          onClick={() => navigate("/UserDashboardEdit")} > {" "} <CiEdit/>Edit</button>
      </div>
    </>
  );
};

export default UserDashboard;
