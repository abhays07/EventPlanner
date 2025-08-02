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
    { id: "banquetHall", label: "Banquet Hall", icon: <FaBookOpen /> },
    { id: "cateringService", label: "Catering Service", icon: <FaUserCircle /> },
    { id: "customers", label: "Customers", icon: <FaUserCircle /> },
    { id: "bookings", label: "Bookings", icon: <FaLifeRing /> },
    { id: "cusQueries", label: "Customer Queries", icon: <FaCommentDots /> },
    { id: "cusFeedback", label: "Customer Feedback", icon: <FaCommentDots /> },
  ];

  return (
    <div className="w-100 min-h-[87vh] p-6 bg-red-50 border-r shadow-md flex flex-col justify-between">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 pb-4 border-b">
          Admin Dashboard
        </h2>

        {/* Navigation Items */}
        <ul className="mt-8 space-y-2">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer text-lg font-medium transition duration-200 overflow-hidden
                ${
                  active === item.id
                    ? "bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg"
                    : "text-gray-700 hover:bg-red-100"
                }`}
              onClick={() => setactive(item.id)}
            >
              <span
                className={`flex-shrink-0 ${
                  active === item.id ? "text-white" : "text-red-600"
                }`}
              >
                {item.icon}
              </span>
              <span className="truncate">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Logout */}
      <div>
        <button
          className="w-full flex items-center justify-center gap-3 px-4 py-3 text-lg font-semibold rounded-lg border border-red-700 text-red-700 bg-white hover:bg-red-800 hover:text-white transition duration-200 shadow-sm"
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
