import express from "express";
import connect_db from "./utils/connect_db.js";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// Create an Express application
const app = express();

// Access environment variables
const PORT = process.env.PORT || 5000;

// Create a database connection
connect_db();

// Set up middleware for JSON parsing
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// Start the Express server
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
