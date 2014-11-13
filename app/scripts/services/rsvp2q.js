define(['angular'], function(angular) {
  'use strict';
  return angular.module('rsvp2q',[])
    .factory('rsvp2q', ['$q',function ($q) {
      var service = {};
      service.asAngularPromise = function(promise) {
        var deferred = $q.defer();

        promise
          .then(
              function(result) { deferred.resolve(result); },
              function(error) { deferred.reject(error); },
              function(status) { deferred.notify(status); }
              );

        return deferred.promise;
      };

      return service;
    }]);
});
