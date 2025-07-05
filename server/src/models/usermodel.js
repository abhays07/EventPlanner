import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullname: {
        type:String,
        required:true,
    },
    emaill:{
        type:String,
        required:true,
        unique:true,
    },
     number:{
        type:String,
        required:true,
        unique:true,
    },
     password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },

},
{timestamps:true}
);

const user = mongoose.model("user",userSchema);
export default user;