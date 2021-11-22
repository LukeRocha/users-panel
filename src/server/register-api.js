var http = require("http");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(require("cors")());
app.use(express.urlencoded({ extend: true }));
app.use(express.json());

app.get("/", (req, res, next) => {
  res.json({ message: "Ok!", data: registers });
});

const registers = [];
app.post("/register", (req, res, next) => {
  console.log("Handled!");

  registers.push({
    name: req.body.person.name,
    email: req.body.person.email,
    age: parseInt(req.body.person.age),
    phone: parseInt(req.body.person.age),
    status: req.body.person.status,
  });
  res.json({ message: "okay!", data: registers });
});

var server = http.createServer(app);
server.listen(3031);
console.log("Listen on 3031");
