define(['angular','translations','underscore','ngTranslate'], function(angular,translations,_) {
  'use strict';
  return angular.module('app.translations',['pascalprecht.translate'])
    .config(['$translateProvider', function (translator) {
      _.forEach(translations,function(value,key) { translator.translations(key,value); });
      translator.preferredLanguage('en');
    }]);
});
