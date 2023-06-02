const express = require("express");
app = express();

app.get("/", (req, res) => {
  return res.json("Done");
});

app.listen(3001);
