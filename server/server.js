// Import necessary modules
const express = require("express");
const cors = require("cors");

// Create an Express application instance
const app = express();

//Import utility function to connect to MongoDB
const connectDB = require("./utils/db");

// Import the Contact model
const Contact = require("./models/contactModel");

// Load environment variables from .env file
require("dotenv").config();

// CORS middleware
app.use(cors());

// Parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Define a route for handling POST requests to submit the contact form
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save data to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error submitting form:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const port = 8000;

app.listen(port, () => console.log(`server started running on port ${port}`));
