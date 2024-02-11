// Import the mongoose library
const mongoose = require("mongoose");

// Define the schema for the contact model using mongoose.Schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

// Create a mongoose model named "Contact"
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
