define([
    'angular'
    ,'./controllers/main'
    ,'ngRoute'
    ,'ngResource'
    ,'ngSanitize'
    //'ui.router',
    //'./config',
], function (angular) {
  'use strict';
  return angular.module('app', [
    'ngRoute'
    ,'app.main'
    , 'ngResource'
    , 'ngSanitize'
  ]).config(function ($routeProvider) {
    $routeProvider
      .when('', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
});
