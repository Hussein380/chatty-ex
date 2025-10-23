import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messagesRoutes from "./routes/messages.route.js";
import { connectDB } from "../lib/db.js";
import { ENV } from "./lib/env.js"


dotenv.config();
const PORT = ENV.PORT || 3000;



const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.listen(PORT, () => {
    console.log("server running on PORT " + PORT)
    connectDB()
});

