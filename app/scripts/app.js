define([
    'angular'
    ,'./controllers/main'
    ,'ngRoute'
    //,'ngResource'
    //,'ngSanitize'
    //'ui.router',
    //'./config',
], function (angular) {
  'use strict';
  return angular.module('app', [
    'ngRoute'
    ,'app.main'
  ]).config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });
});
