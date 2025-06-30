import React from "react";
import image from "../assets/images/bghomephoto.png";
import { useNavigate } from "react-router-dom";
import { BsChatSquareHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../assets/images/aslogo.png.png";
import img1 from "../components/pages/image/plan1.png";
import img2 from "../components/pages/image/plan2.png";
import img3 from "../components/pages/image/plan3.png";
import caption from "../components/pages/image/caption.jpg";
import { FaImage } from "react-icons/fa6";
import pic1 from "../components/pages/image/pic1.svg";
import pic2 from "../components/pages/image/pic2.svg";
import pic3 from "../components/pages/image/pic3.svg";
import pic4 from "../components/pages/image/pic4.svg";
import pic5 from "../components/pages/image/pic5.svg";
import pic6 from "../components/pages/image/pic6.svg";
import { RiPriceTagFill } from "react-icons/ri";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="homepage -mt-32 h-screen">
        <img className=" absolute h-100% -z-1 w-full" src={image} alt="" />

        <div className="grid justify-items-center items-center h-full">
          <h1 className=" text-white text-center absolute text-4xl mt-50 ">
            Crafting Indian Celebrations with
            <br /> Soul & Splendor
          </h1>
          <h4 className=" text-white text-center absolute text-2xl mt-100 ">
            "Bringing your dreams to life—one celebration at a time!
            <br />
            From grand weddings to colorful festivals, <br /> we craft every
            event with tradition, elegance, and a touch of magic."
          </h4>
        </div>

        <button
          className=" cursor-pointer bg-red-600 w-40 h-12 rounded-2xl text-center text-white ml-140 absolute -mt-20  hover:bg-red-800 "
          onClick={() => navigate("/LoginButton")}
        >
          Login
        </button>
        <button
          className=" cursor-pointer bg-white w-40 h-12 rounded-2xl text-center text-red-600 ml-190 absolute -mt-20  hover:bg-amber-400 hover:text-white "
          onClick={() => navigate("/Contact")}
        >
          Contact Us
        </button>
      </div>

      <div className="intro absolute h-307 w-300 bg-red-800 mt-12 ml-40 justify-center flex">
        <div className="begin  ">
          <a href="/">
            {" "}
            <img
              className=" bg-red-950 w-50 shadow-lg mt-10 shadow-black  rounded-full"
              src={logo}
              alt=""
            />{" "}
          </a>
          <span className=" absolute text-white text-4xl mt-10 -ml-48">
            Plan Your Beautiful Journey With Us
          </span>
          <span className=" absolute text-white text-2xl text-center  -ml-80 mt-25">
            Plan your beautiful journey with us—where every moment becomes a
            memory, <br /> and every detail reflects your story. From sacred
            vows to joyful dances, <br /> we make your celebrations truly
            unforgettable.
          </span>
        </div>

        <div className="absolute h-160 w-135 bg-amber-500 mt-130 -ml-150 ">
          <img className="h-165 w-135" src={img1} alt="" />
        </div>
        <div className="absolute h-80 w-145 bg-amber-800 mt-130 ml-140 ">
          <img className="h-85 w-150" src={img2} alt="" />
        </div>
        <div className="absolute h-75 w-145 bg-amber-100 mt-220 ml-140 ">
          <img className="h-75 w-150" src={img3} alt="" />
        </div>
      </div>

      <div className="testimonials h-470 mt-30   bg-pink-200 ">
        <div className="  h-290 ">
          
        </div>
        <div className="caption mt-25 ml-40 ">
          <span className="text-7xl text-amber-950 font-bold ">
            {" "}
            What Our <br /> Clients Are <br /> Saying
          </span>
          <span className=" absolute   text-2xl italic  mt-20 -ml-58 ">
            {" "}
            <br />
            "From the first call to the final farewell, <br /> everything was
            seamless. The decor, the rituals, <br /> the vibe—it felt like a
            dream woven into reality. <br />
            Our guests still talk about the mehendi night! <br />
            Thank you for turning our story into something so beautiful." <br />{" "}
            — Ananya & Rohan, Bhopal
          </span>
        </div>
        <div className="caption flex -mt-55 ml-200 ">
                <div className=" bg-pink-600 mt-20 absolute ml-5 h-100 w-80 "> 
                        <img className=" h-100 w-80" src={caption} alt="" />
                </div>
                <div className=" bg-red-800 h-120 w-85 ml-65 ">
                                <span className=" ml-24 mt-10 text-end absolute text-white text-3xl leading-10"> Choose a life <br /> partner not <br /> because <br /> you can merely <br /> live with them, <br /> but because you <br /> cannot imagine <br /> living without <br /> them.  <br /> <span className="text-xl italic">— Abhishek & Sakshi</span></span>
                </div>
        </div>
      </div>

      <div className="photoGallery w-full h-340 ">
                <div className=" mt-15  ml-176 ">
                       <span className=" text-6xl text-red-800   "> <  FaImage /></span>
                       <div className=" mt-5">
                                 <span className=" font-bold text-7xl text-red-800 -ml-44 ">Photo Gallery <br /></span>
                                <div className=" italic text-2xl  -ml-88 mt-5 ">"A gallery of smiles, laughter, and love — memories our clients hold close forever."

                                </div>
                       </div>
                </div>

                <div className="photos1  h-170 w-280 grid  grid-cols-3 ml-56 ">
                                <div className=" w-85 ">
                                        <img className=" h-170" src={pic1} alt="" />
                                </div>
                                <div className=" w-85  ">
                                        <img className=" h-170" src={pic2} alt="" />
                                </div>
                                <div className=" w-85">
                                        <img className=" h-170" src={pic3} alt="" />
                                </div>
                </div>

                  <div className="photos1  h-170 w-280 grid  grid-cols-3 ml-56 -mt-42">
                                <div className=" ">
                                        <img className=" h-170 w-85" src={pic4} alt="" />
                                </div>
                                <div className="  ">
                                        <img className=" h-170 w-85" src={pic5} alt="" />
                                </div>
                                <div className="">
                                        <img className=" h-170 w-85" src={pic6} alt="" />
                                </div>
                </div>

                
      </div>

                  <div className=" flex pricing bg-pink-200 h-1000 w-full ">
                              <div className=" ml-180">
                                
                               <div>
                                     <span className=" text-8xl text-red-800 "><RiPriceTagFill /></span>
                               </div>
                                <div>
                                      <span className=" text-6xl"> Pricing Plans</span>
                                </div>
                              </div>
                  </div>
    </>
  );
};

export default Home;
