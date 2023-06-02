const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());
app.use(express.json());
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
  const sql = "INSERT INTO users (`username`, `password`) VALUES (?)";
  let values = [req.body.username, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      console.log(err);
    }
  });
});

app.listen(process.env.PORT || 5000);
