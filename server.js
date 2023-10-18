import express from "express";
import connect_db from './utils/connect_db.js';
const app = express();
import data from './insertData.js';
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Express");
});
data();  //comment this out to resist insertion twice;
connect_db();
const port=5000;
app.listen(port,()=>console.log(`server is running on port ${port}`));
