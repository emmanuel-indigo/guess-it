(function () {
	var app = angular.module("guess-it", []);

  app.controller('mainCtrl', ['$scope', function($scope) {

    $scope.numSize = 4;

    $scope.generateNumber = function(){
      
      var generated = [];

      var numbers = [0,1,2,3,4,5,6,7,8,9];
      
      for(var i=0; i<$scope.numSize; ++i){
        var rnd = Math.floor( (Math.random() * (numbers.length-1) ) );
        generated.push( numbers[rnd] );
        numbers.splice(rnd,1);
      }    

      $scope.secretNumber = angular.copy(generated);
      console.log($scope.secretNumber);

      
    }

    $scope.generateNumber();
      
  }]);

})();
