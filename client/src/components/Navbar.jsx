import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import image from "../assets/images/aslogo.png.png";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, isLogin, isAdmin } = useAuth();

  const [navBg, setNavBg] = useState(false);

  const location = useLocation().pathname;
  console.log(location);

  const NavBarDesign = () => {
    location === "/" || location === "/LoginButton" || location === "/Register"
      ? setNavBg(false)
      : setNavBg(true);
  };

  const handleClick = () => {
    isAdmin ? navigate("/adminpanel") : navigate("/CustomerDashboard");
  };

  useEffect(() => {
    NavBarDesign();
  }, [location]);
  return (
    <>
      <div
        className={`${
          navBg ? "bg-red-800" : "bg-transparent"
        } headerline flex text-white justify-center items-center gap-10 text-xl top-0 z-99 relative`}
      >
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Stories">Stories</Link>
        <Link to="/MorePages">More Pages</Link>
        <a href="/">
          {" "}
          <img className="w-30" src={image} alt="" />{" "}
        </a>
        <Link to="/Services">Services</Link>
        <Link to="/Gallery">Gallery</Link>
        {/* <Link to="/Elements">Elements</ Link> */}
        <Link to="/Contact">Contact</Link>
        {isLogin ? (
          <div
            className="flex mt-1 gap-3 items-center cursor-pointer"
            onClick={handleClick}
          >
            <img
              src={user.photo}
              alt="User Dp"
              className="h-10 w-10 border rounded-full object-cover"
            />
            <span className="text-green-500">{user.fullname}</span>
          </div>
        ) : (
          <button
            className=" cursor-pointer bg-transparent w-30 h-10 rounded-2xl text-center text-white  hover:bg-red-600 "
            onClick={() => navigate("LoginButton")}
          >
            {" "}
            Login{" "}
          </button>
        )}
      </div>
    </>
  );
};

export default Navbar;
