(function () {
	'use strict';

	angular
		.module('guess-it')
		.service('NumberValidatorService', NumberValidatorService);

	function NumberValidatorService() {
	}

	NumberValidatorService.prototype.validate = function (computerNumber, userNumber) {
		computerNumber = computerNumber.toString();
		userNumber = userNumber.toString();

		if (computerNumber.length !== userNumber.length) return { none: true };

		var results = { includes: 0, position: 0, none: false };
		for(var i = 0; i < computerNumber.length; i++) {
			if (computerNumber.at(i) === userNumber.at(i)) results.position++;
			else if (computerNumber.includes(userNumber.at(i))) results.includes++;
		}

		results.none = !results.includes && !results.position;

		return results;
	}
})();