import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express(); // ✅ app must be declared BEFORE using it
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((error) => console.error("❌ MongoDB Connection Failed:", error.message));

// Test route
app.get("/", (req, res) => {
  res.send("Server is running and MongoDB connection is active 🚀");
});

// Example API route
app.get("/api/test", (req, res) => {
  res.json({ message: "MongoDB and Express are working perfectly!" });
});

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
