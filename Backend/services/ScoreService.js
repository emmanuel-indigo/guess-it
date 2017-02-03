var mongoose = require("mongoose");
var ScoreSchema = require("../schemas/ScoreSchema");

var ScoreModel = mongoose.model('score', ScoreSchema);	

class ScoreService {

	getScores(callback) { ScoreModel.find({}).sort({ score: 1 }).exec(callback) }

	saveScore(score, callback) { 
		var score = new ScoreModel(score);
		score.save(callback);
	}
}

module.exports = ScoreService;