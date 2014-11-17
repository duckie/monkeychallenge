define(['angular','monkeys'], function(angular,monkeys) {
  'use strict';
  return angular.module('app.main',[])
    .controller('MainCtrl', ['$scope','rsvp2q', function ($scope,$r2q) {
      $scope.value = "test";
      $scope.message = "Click on 1 to start.";
      $scope.config = {
        width:5,
        height:5,
        count_until:5
      };

      $scope.grid = monkeys.createSingleGridPlay($scope.config);

      $scope.newGrid = function() {
        $scope.grid = monkeys.createSingleGridPlay($scope.config);
        $scope.message = "Click on 1 to start.";
      };

      $scope.getCellClass = function(value) {
        if (0 === value) {
          return 'cell-empty';
        }
        else {
         if (0 === $scope.grid.current_state.current) {
           return 'cell-init';
         }
         else {
           if (value <= $scope.grid.current_state.current)
             return 'cell-played';
           else
             return 'cell-filled';
         }
        }
      };

      $scope.play = function(row,col) {
        $r2q.asAngularPromise($scope.grid.play(col,row))
          .then(function(result) {
            if (0 < result.current) {
              if (result.finished)
                $scope.message = "You won ! You made " + result.nb_failed_attempt + " mistakes.";
              else
                $scope.message = "Playing... " + result.nb_failed_attempt + " mistakes.";
          }
        });
      };
    }]);
});
