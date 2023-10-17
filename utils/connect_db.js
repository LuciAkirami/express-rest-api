import mongoose from "mongoose";

function connect_db() {
  mongoose
    .connect(`enter your url`)
    .then((res) => console.log("Mongodb is connected"));
}

export default connect_db;