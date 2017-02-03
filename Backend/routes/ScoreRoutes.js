var express = require("express");
var Router = express.Router();
var ScoreController = require("../controllers/ScoreController");

Router
	.get("/", function (request, response) { ScoreController.getScores(request, response) })
	.post("/", function (request, response) { ScoreController.saveScore(request, response) });

module.exports = Router;