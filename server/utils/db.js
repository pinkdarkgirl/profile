const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const databaseUrl = process.env.MONGODB_URI; // Retrieve MongoDB connection string from environment variable
    const dbName = process.env.DB_NAME; // Retrieve database name from environment variable

    if (!databaseUrl) {
      throw new Error("MongoDB connection string not provided");
    }

    // Connect to MongoDB using Mongoose
    await mongoose.connect(databaseUrl, {
      useNewUrlParser: true,
      dbName,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

module.exports = connectDB;
