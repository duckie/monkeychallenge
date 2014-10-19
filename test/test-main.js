(function (global) {
  var fileWithoutLeadingSlash;
  // array where all spec files will be included
  global.tests = [];

  for (var file in global.__karma__.files) {
    if (global.__karma__.files.hasOwnProperty(file)) {
      // get rid of leading slash in file path - prevents "no timestamp" error
      fileWithoutLeadingSlash = file.replace(/^\//, '');
      global.__karma__.files[fileWithoutLeadingSlash] = global.__karma__.files[file];
      delete global.__karma__.files[file];

      // we get all the test files automatically and store to window.tests array
      if (/spec\.js$/.test(fileWithoutLeadingSlash)) {
        global.tests.push(fileWithoutLeadingSlash);
      }
    }
  }
})(this);

require(['base/app/scripts/config-require'], function (config) {
  'use strict';

  // improve config
  config.baseUrl = 'base/app';
  config.deps = window.tests;
  config.callback = window.__karma__.start;

  // add config for test dependencies
  //config.paths['angular-mocks'] = './vendor/angular-mocks/angular-mocks';
  //config.shim['angular-mocks'] = ['angular'];

  // apply config to require
  window.require.config(config);
});

