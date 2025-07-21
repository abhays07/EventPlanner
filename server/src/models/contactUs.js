import mongoose from "mongoose";

const contactUsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required:true,
    },
    number: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum:["wedding", "birthday", "reception", "farewell", "others"],
      default:"others",
    },
    description: {
      type: String,
      required: true,
    },

  },
  { timestamps: true }
);

const ContactUs = mongoose.model("ContactUs", contactUsSchema);
export default ContactUs;