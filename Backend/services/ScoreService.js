var mongoose = require("mongoose");
var ScoreSchema = require("../schemas/ScoreSchema");

var ScoreModel = mongoose.model('Score', ScoreSchema);	

class ScoreService {

	getScores(callback) { ScoreModel.find({}).exec(callback) }

	saveScore(score, callback) { ScoreModel.save(new ScoreSchema(score), callback) }
}

module.exports = ScoreService;