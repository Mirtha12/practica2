const express = require("express");
const path = require("path");

const app = express();

// Serve static files....
app.use(express.static(__dirname + "/dist/practica2"));
//console.log(express.static(__dirname + '/src'))
//app.use(express.static(path.join(__dirname, '../public')))
// Send all requests to index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/practica2/index.html"));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);