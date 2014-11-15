var gutil       = require('gulp-util'),
    requirejs   = require('requirejs'),
    File        = gutil.File,
    es          = require('event-stream'),
    _           = require('underscore')

module.exports = function(opts) {
  'use strict';
  var options = _.extend({baseUrl:'.',out:'dist/main.js'}, opts);
  var stream = es.pause();
  var filename = options.out;
  options.out = function(data) {
    stream.write(new File({path:filename, contents: new Buffer(data)}));
  };
  
  requirejs.optimize(options);
  return stream;
}

