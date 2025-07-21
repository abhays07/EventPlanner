
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/api";
import { IoIosSave } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const UserDashboardEdit  = () => {
  const navigate= useNavigate();
  const [userdata, setuserdata] = useState("");
  
 const [preview, setPreview] = useState("");
  const [picture, setPicture] = useState("");
  const [loading, setLoading] = useState(false);

    const handelChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setPreview(URL.createObjectURL(e.target.files[0]));
    setPicture(e.target.files[0]);
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("fullName", userdata.fullName);
    formData.append("email", userdata.email);
    formData.append("picture", picture);

    try {
      const res = await api.put("/user/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success(res.data.message);
      setUserData(res.data.data);
      navigate("/userDashboard");
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    } finally {
      setLoading(false);
    }
  };
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
         </div>
          <div className="border rounded-full p-2 w-fit absolute bottom-2 right-2 bg-rose-300 hover:bg-blue-500 hover:text-white">
            <label className="text-2xl" htmlFor="imageUpload">
              <FaCamera />
            </label>
            <input
              type="file"
              className="hidden"
              id="imageUpload"
              onChange={handleImageChange}
            />
          </div>
        <div className=" grid justify-around gap-10">
          <h3 >
            <b>Name : </b> <input className="p-2 border rounded-lg border-rose-300" type="text" name="fullname" value={userdata.fullname} onChange={handelChange} />
          </h3>
          <h3>
            <b>Email : </b> <input type="text" name="emaill"  value= {userdata.emaill}/>
          </h3>
          <h3>
            <b>Phone : </b> <input className="p-2 border rounded-lg border-rose-300" type="text" name="number" value= {userdata.number} />
          </h3>
        </div>
        <div>
        <button className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
          onClick= {handleEditProfile} > <IoIosSave />
          {loading ? "Saving Data . . . " : "Save Data"}
          </button>
      </div>
      
    </>
  );
};

export default UserDashboardEdit;
