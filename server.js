const express = require("express");
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json("Done");
});

app.listen(process.env.PORT || 4000);
