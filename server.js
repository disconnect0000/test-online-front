const express = require("express");
app = express();

app.get("/", (req, res) => {
  res.json("Done");
});

app.listen(process.env.PORT);
