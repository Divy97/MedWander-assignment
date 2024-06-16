const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "New_root",
});

db.connect((err) => {
  if (err) {
    throw err;
  }

  console.log("Database connected");

  db.query("CREATE DATABASE IF NOT EXISTS form_database", (err) => {
    if (err) {
      throw err;
    }

    db.query("USE form_database", (err) => {
      if (err) {
        throw err;
      }

      const createTable = `
        CREATE TABLE IF NOT EXISTS form_data (
          id INT AUTO_INCREMENT PRIMARY KEY,
          formType VARCHAR(1),
          name VARCHAR(255),
          countryCode VARCHAR(5),
          phoneNumber VARCHAR(20)
        )`;

      db.query(createTable, (err) => {
        if (err) {
          throw err;
        }
      });

      console.log("Database and table setup completed.");
    });
  });
});

app.post("/api/form", (req, res) => {
  const { formType, name, countryCode, phoneNumber } = req.body;
  const query =
    "INSERT INTO forms (formType, name, countryCode, phoneNumber) VALUES (?, ?, ?, ?)";
  db.query(query, [formType, name, countryCode, phoneNumber], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).send("Form data inserted");
  });
});

app.get("/api/forms", (req, res) => {
  const query = "SELECT * FROM forms";
  db.query(query, (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(200).json(data);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
