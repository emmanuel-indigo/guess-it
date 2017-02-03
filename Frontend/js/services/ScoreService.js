(function () {
	'use strict';

	angular
		.module('guess-it')
		.service('ScoreService', ScoreService);

	ScoreService.$inject = ['$http', 'ENDPOINT'];

	function procesarRespuestaServidor(httpAngularResponse) {
      	return httpAngularResponse.data;
    }

	function ScoreService($http, ENDPOINT) {
		this.$http = $http;
		this.ENDPOINT = ENDPOINT;
	}

	ScoreService.prototype.getScores = function() {
		return this.$http.get(this.ENDPOINT + "/scores").then(procesarRespuestaServidor);
	}

	ScoreService.prototype.saveScore = function(score) {
		return this.$http.post(this.ENDPOINT + "/scores", score).then(procesarRespuestaServidor);
	}
})();