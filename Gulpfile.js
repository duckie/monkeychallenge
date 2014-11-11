var _ = require('underscore');
var es = require('event-stream');
var express = require('express');
var livereload_connector = require('connect-livereload');
var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
    pattern: ['gulp-*', 'gulp.*', 'main-bower-files'],
    replaceString: /\bgulp[\-.]/
});

var handleError = function (err) {
  console.log(err.name, ' in ', err.plugin, ': ', err.message);
  this.emit('end');
};

// Copy
gulp.task('build', ['copy','js']);

// Copy
gulp.task('copy', ['js'], function () {
  return es.concat(
    // update index.html to work when built
    gulp.src(['app/index.html'])
      .pipe(gulp.dest('dist'))
    // copy config-require
    , gulp.src(['app/scripts/**/*.js'])
      .pipe(plugins.uglify().on('error', handleError))
      .pipe(gulp.dest('dist/scripts'))
    , gulp.src(['app/views/**/*.html']).pipe(gulp.dest('dist/views'))
    , gulp.src(['app/styles/**/*.css']).pipe(gulp.dest('dist/styles'))
    , gulp.src(['app/fonts/**/*']).pipe(gulp.dest('dist/fonts'))
  );
});

gulp.task('express', function() {
  var app = express();
  //console.log(__dirname+'/app');
  app.use(livereload_connector({port:35729}));
  app.use(express.static(__dirname + '/app'));
  app.listen(4000);
});
//
//gulp.task('server', [], function() {
  //plugins.Livereload
//});

// JavaScript
gulp.task('js', function () {
  //return gulp.src(plugins.mainBowerFiles())
  return gulp.src(['app/vendor/**/*.js'])
    .pipe(plugins.filter(['**/*','!**/src/*','!**/test/**/*','!**/build/**/*']))
    .pipe(gulp.dest('dist/vendor'));
});

// Karma
gulp.task('karma', function () {
  return gulp.src(['no need to supply files because everything is in config file'])
    .pipe(plugins.karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }).on('error', handleError));
});

gulp.task('karma-ci', function () {
  return gulp.src(['no need to supply files because everything is in config file'])
    .pipe(karma({
      configFile: 'karma-compiled.conf.js',
      action: 'run'
    }).on('error', handleError));
});

// Watch
gulp.task('server', ['express'], function () {
  // enable Livereload
  plugins.livereload.listen();
  gulp.watch([
    'app/index.html',
    'app/scripts/**/*',
    'app/views/**/*'
  ]).on('change', plugins.livereload.changed);
});

gulp.task('default', ['js', 'copy'], function () {
  gulp.run('karma-ci');
  gulp.run('protractor-ci');
});

