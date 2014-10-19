if (typeof define !== 'function') {
  // to be able to require file from node
  var define = require('amdefine')(module);
}

define({
  baseUrl: '../app',
  // Here paths are set relative to `/source` folder
  paths: {
    'angular' : 'vendor/angular/angular'
    , 'async' : 'vendor/requirejs-plugins/src/async'
    , 'jquery' : 'vendor/jquery/jquery'
    , 'ngRoute' : 'vendor/angular-route/angular-route'
    , 'underscore' : 'vendor/underscore/underscore'
    , 'monkeys':'scripts/engine/monkeys'
  },
  shim: {
    'angular': {
      'deps': ['jquery'],
      'exports': 'angular'
    }
    , 'ngRoute':['angular']
  }
});
