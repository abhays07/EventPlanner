import express from "express";
import ContactUs from "../models/contactUs.js";
import { ContactUsForm } from "../controllers/contactUsController.js";

const router = express.Router();

router.post("/ContactUs", ContactUsForm);

export default router;