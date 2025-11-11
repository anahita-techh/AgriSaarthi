import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import farmData from "./farm-info.js"; 
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((error) => console.error("❌ MongoDB Connection Failed:", error.message));

app.get("/", (req, res) => {
  res.send("Server is running and MongoDB connection is active 🚀");
});

// Your new API route
app.get("/api/farm-info", (req, res) => {
  res.json(farmData); // send the data from farm-info.js
});

app.get("/api/test", (req, res) => {
  res.json({ message: "MongoDB and Express are working perfectly!" });
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
