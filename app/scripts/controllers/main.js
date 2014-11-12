define(['angular','monkeys'], function(angular,monkeys) {
  'use strict';
  return angular.module('app.main',[])
    .controller('MainCtrl', ['$scope',function ($scope) {
      $scope.value = "test";
      $scope.config = {
        width:5,
        height:5
      };

      $scope.grid = monkeys.createSingleGridPlay($scope.config);

      $scope.newGrid = function() {
        $scope.grid = monkeys.createSingleGridPlay($scope.config);
      };
    }]);
});
