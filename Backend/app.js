var express = require('express');
var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/guess-it");

var ScoreRoutes = require('./routes/ScoreRoutes');
app.use("/scores", ScoreRoutes);

var cors = require("cors");
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(8080);