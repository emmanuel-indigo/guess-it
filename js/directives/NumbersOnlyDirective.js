(function () {
  'use strict';

  angular
  	.module('guess-it')
  	.directive('numbersOnly', NumbersOnlyDirective);

  function NumbersOnlyDirective() {
    return {
      replace: true,
      template: '<input replace="[^0-9]" with="">'
    };
  }
})();