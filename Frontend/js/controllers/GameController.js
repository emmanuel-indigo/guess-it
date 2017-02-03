(function () {
	'use strict';

	angular
		.module('guess-it')
		.controller('GameController', GameController);

	GameController.$inject = ["NumberValidatorService", "ScoreService","$ocModal"];

	function GameController (NumberValidatorService, ScoreService, $ocModal) {

		this.NumberValidatorService = NumberValidatorService;
		this.ScoreService = ScoreService;

		this.numSize = 4;

		this.lastsResults = [];

		this.generateNumber();

		this.ocModal = $ocModal;
		this.scores = [];
		this.name = null;
	}

	// function to create a random number without repetitions
    GameController.prototype.generateNumber = function(){

      // create empty array
      var generated = [];

      // define available numbers to chose
      var numbers = [];
      for (var i=0; i<=9; i++) {
          numbers.push(i);
      }
      
      // repeat each time until numSize
      for(var i=0; i<this.numSize; ++i){
        // Create random number between 0 and available numbers
        var rnd = Math.floor( (Math.random() * (numbers.length-1) ) );
        // insert selected number
        generated.push( numbers[rnd] );
        // remove selected random number from numbers available
        numbers.splice(rnd,1);
      }    
      // copy generated number into angular scope variable
      generated = generated.join('')
      this.secretNumber = angular.copy(generated);
      console.log(this.secretNumber);
    }

	GameController.prototype.guessNumber = function () {
		if(!this.userNumber || this.userNumber.length!=4 || typeof(parseInt(this.userNumber))!='number' ){
	        alert('El número debe contener 4 digitos');
	        return;
	      }
	      if(!this.tries)
	      	this.tries = 0;

	      ++this.tries;

	      this.gameResult = this.NumberValidatorService.validate(this.secretNumber, String(this.userNumber) );

	      this.lastsResults.push(angular.copy(this.userNumber))

	      this.userNumber = '';
	}

	GameController.prototype.getScores = function () {
		var $this = this;

		this.ScoreService.getScores()
			.then(function (data) {
				$this.scores = data;
				$this.ocModal.open({
					url: 'partials/maxscore.html',
					cls: 'test fade-in',
					onOpen: function() {
						//console.log('modal1 opened from url');
					}
				})
			});
	}

	GameController.prototype.saveScore = function () {
		var $this = this;
		var score = { name: this.name, score: this.tries };

		this.ScoreService.saveScore(score)
			.then(function () {
				$this.getScores();
			});
	}
})();