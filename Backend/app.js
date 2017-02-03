var express = require('express');
var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/guess-it");

var bodyParser = require("body-parser");
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

var ScoreRoutes = require('./routes/ScoreRoutes');
app.use("/scores", ScoreRoutes);

app.listen(8080);