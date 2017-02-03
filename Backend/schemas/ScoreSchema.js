var mongoose = require("mongoose");

var ScoreSchema = mongoose.Schema({
	score: Number,
	name: String
}, { collection: 'scores' });

module.exports = ScoreSchema;