import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Sidebar from '../Admin/Sidebar';
import Overview from "../Admin/Overview";
import Customers from "../Admin/Customers";
import Bookings from "../Admin/Bookings";
import CustomerQueries from "../Admin/CustomerQueries";
import CustomerFeedback from "../Admin/CustomerFeedback";
import BanquetHall from '../Admin/BanquetHall';
import CateringService from '../Admin/CateringService';

const AdminPanel = () => {
  const navigate = useNavigate();
  const [active, setactive]= useState("overview");
  const {isLogin, isAdmin}= useAuth();

  useEffect(()=>{
    if (!isLogin){
      navigate("/LoginButton");
    }
  }, [isLogin,isAdmin,navigate]);

  return (
    <>
       <div className="flex">
        <Sidebar active={active} setactive={setactive} />
        <div className="w-full">
          {active === "overview" && <Overview />}
          {active === "banquetHall" && <BanquetHall />}
           {active === "cateringService" && <CateringService />}
          {active === "customers" && <Customers />}
          {active === "bookings" && <Bookings />}
          {active === "cusQueries" && <CustomerQueries />}
          {active === "cusFeedback" && <CustomerFeedback />}
        </div>
      </div>
    </>
  );
};

export default AdminPanel;