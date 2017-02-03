(function () {
	'use strict';

	angular
		.module('guess-it')
		.controller('GameController', GameController);

	function GameController () {
	}

	GameController.prototype.helloWorld = function () {
		console.log("Hello world!");
	}
})();