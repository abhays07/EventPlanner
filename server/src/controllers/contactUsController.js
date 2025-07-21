import ContactUs from "../models/contactUs.js";

export const ContactUsForm = async (req, res) => {
  const { name, number, email, type, description } = req.body;

  if (!name || !number || !email || !description) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  try {
    const newContact = new ContactUs({ name, number, email, type, description });
    await newContact.save();
    res.status(201).json({ message: "We will get back tou you! ASAP" });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({ message: "Server error. Try again later." });
  }
};