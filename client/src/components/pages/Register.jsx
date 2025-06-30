import React from "react";
import bg from "../pages/image/bg-homepage.png";
import { useState } from "react";

function Register() {


  const [fullname, setfullname] = useState();
  const [emaill, setemaill] = useState();
  const [number, setnumber] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();

  const formsubmit = (e) => {
    e.preventDefault();
    console.log("fullname", fullname);
    console.log("emaill", emaill);
    console.log("number", number);
    console.log("password", password);
    console.log("cpassword", cpassword);
    setfullname("");
    setemaill("");
    setnumber("");
    setpassword("");
    setcpassword("");
  };

  const [Register, setregister] = useState({
    fullname: "",
    emaill: "",
    number: "",
    password: "",
    cpassword: "",
  });

  

  const handlechange = (e) => {
    const { name, value } = e.target;
    setregister((previousdata) => ({ ...previousdata, [name]: value }));
  };

  const handelsubmit = (e) => {
    e.preventDefault();
    console.log(Register);
    setregister({
      fullname: "",
      emaill: "",
      number: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <>
      <div className="">
        <div className=" flex">
          <img className=" -mt-30 blur-md " src={bg} alt="" />
          <div className=" absolute ml-120 rounded-2xl mt-15 bg-red-800 h-150 w-135">
            <h3 className=" text-center text-white text-4xl mt-8 ">
              <u>Create Your Account</u>
            </h3>
            <input
              className="text-black p-2 rounded-sm w-75 border-b-2 mt-10 ml-30 bg-white"
              type="text"
              value={Register.fullname}
              onChange={handlechange}
              name="fullname"
              placeholder="Enter your Full Name"
            />
            <input
              className="text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white"
              type="email"
              name="emaill"
                value={Register.emaill}
              onChange={handlechange}
              placeholder="Enter your email"
            />
            <input
              className="text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white"
              type="tel"
              name="number"
                value={Register.number}
              onChange={handlechange}
              placeholder="Enter your phone number"
            />
            <input
              className="text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white"
              type="password"
              name="password"
                value={Register.password}
              onChange={handlechange}
              placeholder="Enter your password"
            />
            <input
              className="text-black p-2 rounded-sm w-75 border-b-2 mt-7 ml-30 bg-white"
              type="password"
              name="cpassword"
                value={Register.cpassword}
              onChange={handlechange}
              placeholder="Confirm your password"
            />
            <div>
              <button className=" bg-white p-2 text-red-800 ml-48 mt-10 rounded-sm w-40 h-10 text-lg" onClick={handelsubmit}>
                Register Now
              </button>
            </div>
            <div className=" mt-3 ml-35 text-white">
              Already have an Account ?{" "}
              <a className=" text-amber-400 font-bold" href="/LoginButton">
                Login Now
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
