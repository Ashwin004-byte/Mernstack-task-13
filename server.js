const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cloudinary = require("./Config/cloudinary");
const upload = require("./Middleware/upload");
const User = require("./Models/User");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/task13db")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });

// Home Route
app.get("/", (req, res) => {
  res.send("File Upload & Media Management API");
});

// Upload Route
app.post(
  "/upload",
  upload.single("image"),
  async (req, res) => {
    try {
        console.log("Body:", req.body);
        console.log("File:", req.file);
      const { name } = req.body;

      const result = await cloudinary.uploader.upload(
        req.file.path
      );

      const user = new User({
        name,
        imageUrl: result.secure_url,
      });

      await user.save();
      console.log("Saved User:", user);

      res.status(201).json({
        message: "Image Uploaded Successfully",
        imageUrl: result.secure_url,
      });
    } catch (error) {
        console.log("ERROR:", error);
      res.status(500).json({
        message: error.message,
      });
    }
  }
);

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});