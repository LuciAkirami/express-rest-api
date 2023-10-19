import express from "express";
import connect_db from './utils/connect_db.js';
const app = express();
import data from './insertData.js';
import university_routes from './routes/university.js'
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Express");
});
app.use('/api',university_routes)
connect_db();
const port=5000;
app.listen(port,()=>console.log(`server is running on port ${port}`));