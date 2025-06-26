import React from "react";
import contact from "../pages/image/contactus.png";
import loc from "../pages/image/location.png";
import email from "../pages/image/email.png";
import phone from "../pages/image/phone.png";
import chat from "../pages/image/chat.png";

function Contact() {
  return (
    <>
      <div className="">
        <div className=" flex">
          <img className=" -mt-30 h-150 w-full  " src={contact} alt="" />
          <div className=" absolute text-white text-6xl ml-160 mt-60">
            <span>Contact Us</span>
          </div>
          <div className=" flex  gap-25 absolute bg-red-800  h-55 w-300 ml-40 mt-90 ">
            <div className=" ml-10">
              <img className=" size-40 ml-18 " src={loc} alt="" />
              <div className="text-white -mt-8 ml-5 text-center text-lg">
                Minal Residency, near Ayodhya Bypass <br /> Bhopal Madhya
                Pradesh, 462022
              </div>
            </div>
            <div className=" ml-10">
              <img className=" size-42 ml-15 " src={email} alt="" />
              <div className="text-white -mt-8 ml-8 text-center text-lg">
                customersupport@gmail.com
              </div>
            </div>
            <div className=" ml-10">
              <img className=" size-42 ml-15 " src={phone} alt="" />
              <div className="text-white -mt-8 ml-13 text-center text-lg">
                +919876543210
              </div>
            </div>
          </div>
        </div>
        <div className=" flex bg-red-800 h-180 w-300 mt-50 ml-40">
          <div className=" w-150 h-180">
            <img className=" absolute w-150 h-180" src={chat} alt="" />
          </div>
          <div className="  w-150 mt-15  ml-15 ">
            <span className="text-6xl text-white">Enquire Now</span>
            <div>
              <input
                className="text-black h-10 p-1 text-xl  w-130 border-b-2  mt-15 outline-none text-white"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="text-black h-10 p-1 text-xl  w-130 border-b-2  mt-10 outline-none text-white"
                type="tel"
                placeholder="Phone"
              />
            </div>
            <div>
              <input
                className="text-black h-10 p-1 text-xl  w-130 border-b-2  mt-10 outline-none text-white"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="mt-10 w-130 text-xl">
              <select
                name=""
                className=" cursor-pointer w-130 p-1 text-white border-b-2 outline-white"
                id=""
              >
                <option className="" value="">
                  Event Type
                </option>
                <option className="text-black" value="">
                  Wedding
                </option>
                <option className="text-black" value="">
                  Birthday Party
                </option>
                <option className="text-black" value="">
                  Farewell Party
                </option>
                <option className="text-black" value="">
                  Reception Party
                </option>
                <option className="text-black" value="">
                  Any Other Event
                </option>
              </select>
            </div>
            <div>
              <textarea className=" w-130 mt-10 text-white outline-none p-2 text-xl border-b-2" placeholder="Description" name="" id=""></textarea>
            </div>
            <div>
                     <button className=' absolute cursor-pointer bg-white w-60 h-12 mt-15  rounded-xl text-center text-black  hover:bg-amber-400  hover:text-white'>Send Message</button>
                  
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
