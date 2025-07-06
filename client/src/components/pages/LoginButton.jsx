import React, { useState } from "react";
import api from "../../config/api";
import bg from "../pages/image/bg-homepage.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {

  const navigate = useNavigate()

  const [emaill, setemail] = useState();
  const [password, setpassword] = useState();

  const [Registerdata, setregisterdata] = useState({
    emaill: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setregisterdata((previousdata) => ({ ...previousdata, [name]: value }));
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    console.log(Registerdata);
    try {
          const res = await api.post("/auth/login", Registerdata);
          toast.success(res.data.message);
      emaill: "";
      password: "";
      navigate("/UserDashboard");
        } catch (error) {
          toast.error(
        `Error : ${error.response?.status || error.message} ${
          error.response?.data.message || ""
        }`
      );
        }
      };
    
  
  return (
    <>
      <div className="">
        <div className=" flex">
          <img className=" -mt-30 blur-md " src={bg} alt="" />
          <div className=" absolute ml-130 rounded-2xl mt-20 bg-red-800 h-110 w-120">
            <h3 className=" text-center text-white text-3xl mt-8 ">
              <u>Login</u>
            </h3>
            <input
              className="text-black p-2 rounded-sm w-70 border-b-2 mt-10 ml-25 bg-white"
              type="email"
              name="emaill"
              value={Registerdata.emaill}
              placeholder="Enter your email"
              onChange={handlechange}
            />
            <input
              className="text-black p-2 rounded-sm w-70 border-b-2 mt-8 ml-25 bg-white"
              type="password"
              value={Registerdata.password}
              name="password"
              placeholder="Enter your password"
              onChange={handlechange}
            />
            <div>
              <button
                className=" bg-white p-2 text-red-800 ml-40 mt-10 rounded-sm w-40 h-10 text-lg "
                type="submit"
                onClick={handelsubmit}
              >
                Login
              </button>
            </div>
            <div className=" mt-3 ml-25 text-white">
              Don't have an Account ? <a className=" text-amber-400 font-bold" href="/Register">Register Now</a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginButton;
