const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

// REST API
app.get("/", function (req, res) {
  res.write("This is the Basic Path");
  res.end();
});

app.post("/", function (req, res) {
  const name = req.body.name;
  res.write(`The name is ${name}`);
  res.end();
});

app.listen(8080, console.log("Server Started!!"));
