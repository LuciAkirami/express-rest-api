import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

function connect_db() {
  mongoose.connect('`).connect(MONGODB_URI).then((res) => console.log("Mongodb is connected"));
}

export default connect_db;
