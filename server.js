import express from "express";
import connect_db from "./utils/connect_db.js";
import dotenv from "dotenv";

// Load environment variables from .env
dotenv.config();

// Create an Express application
const app = express();
<<<<<<< HEAD
import data from './insertData.js';
import university_routes from './routes/university.js'
=======

// Access environment variables
const PORT = process.env.PORT || 5000;

// Create a database connection
connect_db();

// Set up middleware for JSON parsing
>>>>>>> 2814bf4c6d3f2386cd8df11a919a7833e54e16f0
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express");
});
<<<<<<< HEAD
app.use('/api',university_routes)
connect_db();
const port=5000;
app.listen(port,()=>console.log(`server is running on port ${port}`));
=======

// Start the Express server
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
>>>>>>> 2814bf4c6d3f2386cd8df11a919a7833e54e16f0
