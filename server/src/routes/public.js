import express from "express";
import { ContactUsForm } from "../controllers/contactUsController.js";

const router = express.Router();

router.post("/contactUs", ContactUsForm);

export default router;