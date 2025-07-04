import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";

import { connect } from "mongoose";

const app=express();

app.get("/",(req,res)=>{
    res.json({message:"Server Connected"})
})

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log("Server started at ", port);
    connectDB();
    
})
    
