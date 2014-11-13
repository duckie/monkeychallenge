define([
    'angular'
    ,'./controllers/main'
    ,'./services/rsvp2q'
    ,'ngRoute'
], function (angular) {
  'use strict';
  return angular.module('app', [
    'ngRoute'
    ,'app.main'
    ,'rsvp2q'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
});
