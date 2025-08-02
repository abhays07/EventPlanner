import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db.js";
import user from "../models/usermodel.js";

import bcrypt from "bcrypt";

const seedAdmin = async () => {
  await connectDB();

  const adminPassword = await bcrypt.hash("Admin@123", 10);
  const AdminUser = {
    fullname: "Admin User",
    emaill: "admin@mywebsite.com",
    number: "N/A",
    password: adminPassword,
    photo: "https://placehold.co/600x400?text=A",
    gender: "N/A",
    occupation: "N/A",
    address: "N/A",
    city: "Panna",
    district: "Panna",
    state: "Madhya Pradesh",
    role: "Admin",
    status: "Active",
    representing: "N/A",
    cpassword: "N/A",
  };

  const existingAdmin = await user.findOne({role:"Admin"});

  let admin;
  if (existingAdmin){
    admin = await user.findByIdAndUpdate(existingAdmin._id, AdminUser,{
        new:true,
    });
    console.log("Admin User Updated Successfully",admin.emaill)
  }
  else{
     admin = await user.create(AdminUser);
    console.log("Admin User Created Successfully", admin.emaill);
    
  }
  process.exit(1);
};

seedAdmin();
