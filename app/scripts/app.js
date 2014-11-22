define([
    'angular'
    ,'scripts/controllers/main'
    ,'scripts/services/rsvp2q'
    ,'ngRoute'
], function (angular) {
  'use strict';
  return angular.module('app', [
    'ngRoute'
    ,'app.main'
    ,'rsvp2q'
  ]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
});
