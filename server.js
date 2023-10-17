const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

const port=5000;
app.listen(port,()=>console.log(`server is running on port ${port}`));
