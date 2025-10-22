import express from "express";


const router = express.Router();



router.get("/Signup", (req, res) => {
    res.send("Signup endpoint");
})


router.get("/Login", (req, res) => {
    res.send("login endpoint");
})


router.get("/Logout", (req, res) => {
    res.send("Logout endpoint");
})



export default router;