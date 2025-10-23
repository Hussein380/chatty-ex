import express from "express";
import { signup } from "../controllers/auth.controller.js";



const router = express.Router();



router.post("/Signup", signup)


router.get("/Login", (req, res) => {
    res.send("login endpoint");
})


router.get("/Logout", (req, res) => {
    res.send("Logout endpoint");
})



export default router;