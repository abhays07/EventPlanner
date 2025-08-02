import express from "express";
import { RegisterUser } from "../controllers/authcontroller.js";
import { LoginUser } from "../controllers/authcontroller.js";
import { LogoutUser } from "../controllers/authcontroller.js";
import { UpdateUser } from "../controllers/authcontroller.js";

const router = express.Router();

router.post("/register",RegisterUser);
router.post("/login",LoginUser);
router.get("/logout",LogoutUser);
//router.put("/update",UpdateUser);

export default router;