import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";



const router = express.Router();



router.post("/Signup", signup);


router.post("/Login", login);


router.post("/Logout", logout);



export default router;