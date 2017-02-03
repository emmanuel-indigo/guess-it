(function () {
	'use strict';

	angular
		.module('guess-it')
		.controller('GameController', GameController);

	GameController.$inject = ["NumberValidatorService"];

	function GameController (NumberValidatorService) {

		this.NumberValidatorService = NumberValidatorService;

		this.numSize = 4;

		this.generateNumber();


	}

	// function to create a random number without repetitions
    GameController.prototype.generateNumber = function(){

    	console.log('generated')
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
      this.secretNumber = angular.copy(generated);
    }

	GameController.prototype.guessNumber = function () {
		if(!this.userNumber || String(this.userNumber).length!=4 || typeof(parseInt(this.userNumber))!='number' ){
	        alert('El número debe contener 4 digitos');
	        return;
	      }
	      if(!this.tries)
	      	this.tries = 0;

	      ++this.tries;

	      var response = this.NumberValidatorService.validate(this.secretNumber, this.userNumber);
	      console.log('intentos: '+this.tries);
	      console.log(response)
	}



})();