define(['angular','monkeys'], function(angular,monkeys) {
  'use strict';
  return angular.module('app.main',[])
    .controller('MainCtrl', ['$scope','rsvp2q', function ($scope,$r2q) {
      $scope.value = "test";
      $scope.message = 'BEFORE_GAME.MESSAGE_BOX';
      $scope.nb_mistakes = 0;
      $scope.config = {
        width:5,
        height:5,
        count_until:5
      };

      $scope.grid = monkeys.createSingleGridPlay($scope.config);

      $scope.newGrid = function() {
        $scope.grid = monkeys.createSingleGridPlay($scope.config);
        $scope.message = 'BEFORE_GAME.MESSAGE_BOX';
        $scope.nb_mistakes = 0;
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
            $scope.nb_mistakes = result.nb_failed_attempt;
            if (0 < result.current) {
              if (result.finished)
                $scope.message = "GAME_WON.MESSAGE_BOX";
              else
                $scope.message = "DURING_GAME.MESSAGE_BOX";
          }
        });
      };
    }]);
});
