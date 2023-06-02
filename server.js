const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  database: "bys14cmytvyjy0gfobdf",
  user: "u0scs1olouwxhfne",
  host: "bys14cmytvyjy0gfobdf-mysql.services.clever-cloud.com",
  password: "rVts5mKeHG4AodywiDb2",
});

app.get("/test", (req, res) => {
  res.json("Done");
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM users;";
  db.query(sql, (err, data) => {
    res.json(data);
  });
});

app.post("/", (req, res) => {
  res.json("POST DONE");
});

app.listen(process.env.PORT || 5000);
