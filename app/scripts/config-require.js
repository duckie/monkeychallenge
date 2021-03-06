if (typeof define !== 'function') {
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define(function(require){
  return { 
    baseUrl: '.',
    // Here paths are set relative to `/source` folder
    paths: {
      'angular' : 'vendor/angular/angular'
      , 'async' : 'vendor/requirejs-plugins/src/async'
      , 'jquery' : 'vendor/jquery/jquery'
      , 'ngRoute' : 'vendor/angular-route/angular-route'
      , 'ngTranslate': 'vendor/angular-translate/angular-translate'
      , 'underscore' : 'vendor/underscore/underscore'
      , 'rsvp' : 'vendor/rsvp/rsvp.amd'
      , 'monkeys':'scripts/engine/monkeys'
      , 'es5-shim' : 'vendor/es5-shim/es5-shim'
      , 'translations': 'scripts/config/translations'
      //, 'ngResource' : 'vendor/angular-resource/angular-resource'
      //, 'ngSanitize' : 'vendor/angular-sanitize/angular-sanitize'
      //'ui.router' : 'vendor/angular-ui-router/release/angular-ui-router'
    },
    shim: {
      'angular': {
        'deps': ['jquery'],
        'exports': 'angular'
      }
      , 'ngRoute':['angular']
      , 'ngTranslate':['angular']
      //, 'ngResource': ['angular']
      //, 'ngResource':['angular']
      //, 'ngSanitize':['angular']
      //'ui.router' : ['angular']
    }
  }
});
