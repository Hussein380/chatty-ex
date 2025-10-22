import express from "express";

const router = express.Router();

router.get('/Send', (req, res) => {
    res.send("send message endpoint")
})

export default router;