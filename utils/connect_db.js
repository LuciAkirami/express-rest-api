import mongoose from "mongoose";

function connect_db() {
  mongoose
    .connect(`mongodb+srv://Vanshika:Vanshika@cluster0.hozpztk.mongodb.net/hacktoberfest?retryWrites=true&w=majority`)
    .then((res) => console.log("Mongodb is connected"));
}

export default connect_db;