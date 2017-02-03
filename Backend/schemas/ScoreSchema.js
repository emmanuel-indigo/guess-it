var mongoose = require("mongoose");

var ScoreSchema = mongoose.Schema({
	score: Number,
	name: String
});

module.exports = ScoreSchema;