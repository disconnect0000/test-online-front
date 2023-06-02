const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/test", (req, res) => {
  res.json("Done");
});

app.get("/", (req, res) => {
  res.json("GET DONE");
});

app.post("/", (req, res) => {
  res.json("POST DONE");
});

app.listen(process.env.PORT || 5000);
