define(['angular','ngRoute'], function(angular) {
  'use strict';
  return angular.module('app.main',['ngRoute'])
    .config(function($routeProvider){
    })
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
