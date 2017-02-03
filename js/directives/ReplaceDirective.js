(function () {
  'use strict';

  angular
    .module('guess-it')
    .directive('replace', ReplaceDirective);

  function ReplaceDirective() {
    return {
      require: 'ngModel',
      scope: {
        regex: '@replace',
        with: '@with'
      },
      link: function(scope, element, attrs, model) {
        model.$parsers.push(function(val) {
          if (!val) { return; }
          var regex = new RegExp(scope.regex);
          var replaced = val.replace(regex, scope.with);
          if (replaced !== val) {
            model.$setViewValue(replaced);
            model.$render();
          }
          return replaced;
        });
      }
    };
  }
})();