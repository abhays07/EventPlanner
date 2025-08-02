import React from "react";
import {
  FaRegChartBar,
  FaBookOpen,
  FaUserCircle,
  FaLifeRing,
  FaCommentDots,
} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = ({ active, setactive }) => {
  const { setUser, setIsLogin, setIsAdmin } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await api.get("/auth/logout");
    setUser("");
    sessionStorage.removeItem("EventUser");
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
  };
  
   const navItems = [
    { id: "overview", label: "Overview", icon: <FaRegChartBar /> },
    { id: "Bookings", label: "Bookings", icon: <FaBookOpen /> },
    { id: "Profile", label: "Profile", icon: <FaUserCircle /> },
    { id: "Support", label: "Support", icon: <FaLifeRing /> },
    { id: "Feedback", label: "Feedback", icon: <FaCommentDots /> },
  ];


  return (
    <div className="w-100 min-h-[87vh] p-6 bg-white border-r shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div>
        <h2 className=" text-2xl font-semibold text-pink-600 border-b pb-4">
          Customer Dashboard
        </h2>

        {/* Navigation Items */}
        <ul className="mt-8 space-y-3">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-lg font-medium transition duration-200
                ${
                  active === item.id
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              onClick={() => setactive(item.id)}
            >
              {item.icon}
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div>
        <button
          className="w-full cursor-pointer flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold border border-red-500 text-red-500 rounded-lg hover:bg-gradient-to-r from-pink-600 to-purple-600 hover:text-white transition duration-200"
          onClick={handleLogout}
        >
          <FiLogOut />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
