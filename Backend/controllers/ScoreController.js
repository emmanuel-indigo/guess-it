var ScoreService = require("../services/ScoreService");

class ScoreController {
	
	constructor() {
		this.scoreService = new ScoreService();
	}

	getScores(request, response) {
		this.scoreService.getScores(function (err, scores) {
			if (err) response.status(500).end();
			else response.status(200).json(scores);
		});
	}

	saveScore(request, response) {
		this.scoreService.saveScore(request.body, function (err) {
			if (err) response.status(500).end();
			else response.status(200).end();
		});
	}
}

module.exports = new ScoreController();