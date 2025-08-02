import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    emaill: {
      type: String,
      required: true,
      unique: true,
    },
    number: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    cpassword: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
      default: "",
      
    },
    gender: {
      type: String,
      enum: ["male", "female", "other", "N/A"],
      default: "N/A",
      required: true,
    },
    representing: {
      type: String,
      enum: ["Groom", "Bride", "Both", "N/A"],
      default: "N/A",
      required: true,
    },
    occupation: {
      type: String,
      default: " N/A",
      required: true,
    },
    address: {
      type: String,
      default: "N/A",
      required: true,
    },
    city: {
      type: String,
      default: "N/A",
      required: true,
    },
    district: {
      type: String,
      default: "N/A",
      required: true,
    },
    state: {
      type: String,
      default: "N/A",
      required: true,
    },
    role: {
      type: String,
      enum: ["Admin", "User", "N/A"],
      default: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
      required: true,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);
export default user;
