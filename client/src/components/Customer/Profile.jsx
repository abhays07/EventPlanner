import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/api";
import { FaUserEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ProfileEditModal from "./ProfileEditModal";
import AccountDeactivateModal from "./AccountDeactivateModal";

const Profile = () => {
  const [userdata, setUserData] = useState({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
   const [isDeactivateModalOpen, setIsDeactivateModalOpen] = useState(false);

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
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
  }, [isEditModalOpen]);

  return (
    <>
      {/* Header section */}

      <div className="flex justify-between bg-gradient-to-r from-pink-600 to-purple-600 p-4 shadow-lg">
        <h1 className="text-3xl font-bold text-white">Customer Profile</h1>
        <button
          className="border border-white hover:scale-105 text-white p-2 rounded-lg font-bold flex gap-2 justify-center items-center hover:bg-pink-600 text-lg"
          onClick={() => setIsEditModalOpen(true)}
        >
          {" "}
          <FaUserEdit className="text-xl" />
          Edit
        </button>
      </div>

      {/* Profile Card */}
     <div className="flex justify-center items-start mt-10 px-4">
  <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl">
    
    {/* Profile Info Block - 35% */}
    <div className="w-full md:w-[35%] bg-white rounded-2xl shadow-lg p-6 border border-red-200 flex flex-col items-center gap-6">
      <img
        className="w-48 h-48 rounded-full border-4 text-pink-500 object-cover shadow-md"
        src={userdata.photo}
        alt="Profile"
      />
      <div className="flex flex-col gap-4 text-lg w-full">
        <p>
          <span className="font-semibold text-purple-700">Name:</span> {userdata.fullname}
        </p>
        <p>
          <span className="font-semibold text-purple-700">Email:</span> {userdata.emaill}
        </p>
        <p>
          <span className="font-semibold text-purple-700">Phone:</span> {userdata.number}
        </p>
      </div>
    </div>

    {/* Additional Information Block - 65% */}
    <div className="w-full md:w-[65%] bg-white rounded-2xl shadow-lg p-6 border border-red-200">
      <h2 className="text-xl font-semibold text-pink-700 mb-4 border-b border-pink-200 pb-2">
        Additional Information
      </h2>
      <div className="space-y-4 text-gray-700 text-base">
        <p><b className="text-purple-700">Gender:</b> <span className="ml-2">{userdata.gender}</span></p>
        <p><b className="text-purple-700">Occupation:</b> <span className="ml-2">{userdata.occupation}</span></p>
        <p><b className="text-purple-700">Address:</b> <span className="ml-2">{userdata.address}</span></p>
        <p><b className="text-purple-700">City:</b> <span className="ml-2">{userdata.city}</span></p>
        <p><b className="text-purple-700">District:</b> <span className="ml-2">{userdata.district}</span></p>
        <p><b className="text-purple-700">State:</b> <span className="ml-2">{userdata.state}</span></p>
        <p><b className="text-purple-700">Representing:</b> <span className="ml-2">{userdata.representing}</span></p>
      </div>
    </div>

  </div>
</div>
 <button
        className="border border-red-500 hover:scale-105 mx-5 float-end text-red-500 p-2 rounded-lg font-bold flex gap-2 justify-center items-center hover:bg-red-500 hover:text-white cursor-pointer text-lg"
        onClick={() => {
          setIsDeactivateModalOpen(true);
        }}
      >
        Deactivate My acoount
      </button>
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
        }}
        oldData={userdata}
      />
       <AccountDeactivateModal
        isOpen={isDeactivateModalOpen}
        onClose={() => {
          setIsDeactivateModalOpen(false);
        }}
      />
    </>
  );
};

export default Profile;
