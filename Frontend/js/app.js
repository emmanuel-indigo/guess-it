(function () {
  var app = angular.module("guess-it", []);

  Sugar.extend();

  app.controller('mainCtrl', ['$scope', function($scope) {
      
  }]);

  app.filter('range', function() {
    return function(val, range) {
      range = parseInt(range);
      for (var i=0; i<range; i++)
        val.push(i);
      return val;
    };
  })

  app.constant("ENDPOINT", "http://guess-it.tk:8080");
})();
