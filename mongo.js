const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
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

app.post("/adduser", async function (req, res) {
  //   const name = req.body.name;
  //     const pass = req.body.pass;
  //     const dateOfBirth = req.body.dateOfBirth;

  const { name, pass } = req.body;
  const user = new User({
    name,
    pass,
  });

  await user.save();
  res.status(200).json({
    msg: "Data Saved",
  });
});

mongoose.connect(
  "mongodb://127.0.0.1:27017/dsc?compressors=zlib&gssapiServiceName=mongodb",
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
    app.listen(8080, console.log("Server Started!!"));
  }
);
