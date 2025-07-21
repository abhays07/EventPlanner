import React, { useState } from "react";
import Sidebar from "../Customer/Sidebar";
import Overview from "../Customer/Overview";
import Profile from "../Customer/Profile";
import Bookings from "../Customer/Bookings";
import Feedback from "../Customer/Feedback";
import Support from "../Customer/Support";

const CustomerDashboard = () => {
  const [active, setactive] = useState("overview");

  return (
    <>

    <div className =" bg-red-800 w-full h-40 -mt-40"></div>
      <div className=" flex  ">
        <Sidebar active={active} setactive={setactive} />
        <div className=" w-full border">
          {active === "overview" && <Overview />}
          {active === "Profile" && <Profile />}
          {active === "Bookings" && <Bookings />}
          {active === "Feedback" && <Feedback />}
          {active === "Support" && <Support />}
        </div>
      </div>
    </>
  );
};

export default CustomerDashboard;
