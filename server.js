const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json("Done");
});

app.listen(process.env.PORT || 5000);
