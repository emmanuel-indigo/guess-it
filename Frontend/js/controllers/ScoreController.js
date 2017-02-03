(function () {
	'use strict';

	angular
		.module('guess-it')
		.controller('ScoreController', ScoreController);

	ScoreController.$inject = ["$init"];

	function ScoreController ($init) {
		this.scores = $init.scores;
	}

})();