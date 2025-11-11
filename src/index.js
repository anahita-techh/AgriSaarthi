import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import farmData from "./farm-info.js"; // ✅ no extra src

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Server is running"));

app.get("/api/farm-info", (req, res) => {
  res.json(farmData); // ✅ your new route
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
