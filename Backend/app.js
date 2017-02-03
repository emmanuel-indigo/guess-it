var express = require('express');
var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/guess-it");

var ScoreRoutes = require('./routes/ScoreRoutes');
app.use("/scores", ScoreRoutes);

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.listen(8080);