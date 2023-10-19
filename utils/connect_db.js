import mongoose from "mongoose";
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

function connect_db() {
  mongoose
<<<<<<< HEAD
    .connect(`mongodb+srv://Vanshika:Vanshika@cluster0.hozpztk.mongodb.net/hacktoberfest?retryWrites=true&w=majority`)
=======
    .connect(MONGODB_URI)
>>>>>>> 2814bf4c6d3f2386cd8df11a919a7833e54e16f0
    .then((res) => console.log("Mongodb is connected"));
}

export default connect_db;