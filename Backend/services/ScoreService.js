var mongoose = require("mongoose");
var ScoreSchema = require("../schemas/ScoreSchema");

var ScoreModel = mongoose.model('Score', ScoreSchema);	

class ScoreService {

	getScores(callback) { ScoreModel.find({}).sort({ score: 1 }).exec(callback) }

	saveScore(score, callback) { ScoreModel.save(score, callback) }
}

module.exports = ScoreService;