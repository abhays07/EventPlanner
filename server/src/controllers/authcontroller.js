import User from "../models/usermodel.js";
import bcrypt from "bcrypt";
import genToken from "../utils/auth.js";
export const RegisterUser = async(req, res,next)=>{
   try {
         const {fullname, emaill,number, password, cpassword}=req.body;

    if (!fullname || !emaill || !number || !password || !cpassword){
        const error = new Error("All fields required");
        error.statusCode=400;
        return next(error);
        
    }

    const existingUser = await User.findOne({emaill})
    if (existingUser)
    {
         const error = new Error("Email Already Exists");
        error.statusCode=409;
        return next(error);
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const hashedcPassword = await bcrypt.hash(cpassword,10);
    const newUser = await User.create({
        fullname,
        emaill ,
        number,
        password : hashedPassword,
        cpassword : hashedcPassword,
    });
    res.status(201).json({message:"Registration Successfull"})
   } catch (error) {
        next(error);
   }
};

export const LoginUser = async (req, res,next)=>{
    try {
        const {emaill,password}=req.body;

        if (!emaill || !password){
        const error = new Error("All fields required");
        error.statusCode=400;
        return next(error);
        }

      const user = await User.findOne({emaill})
    if (!user)
    {
         const error = new Error("User not registered");
        error.statusCode=409;
        return next(error);
    } 
    
    const isVerified= await bcrypt.compare(password,user.password);
    if (!isVerified)
    {
        const error = new Error("Invalid Username or Password");
        error.statusCode=401;
        return next(error);   
    }
    genToken(user._id,res);
    res.status(200).json({message:`Welcome back ${user.fullname}`,data:user})
        
    } catch (error) {
         next(error);
    }
}
export const LogoutUser = async (req, res)=>{
    
}
export const UpdateUser = async (req, res)=>{
    
}