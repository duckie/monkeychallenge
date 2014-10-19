var _ = require('underscore');
var autoprefix = require('gulp-autoprefixer');
var es = require('event-stream');
var gulp = require('gulp');
var karma = require('gulp-karma');
var livereload = require('gulp-livereload');
var replace = require('gulp-replace');
var rjs = require('gulp-requirejs');
var spawn = require('child_process').spawn;
var uglify = require('gulp-uglify');
var debug = require('gulp-debug');
//var sass = require('gulp-ruby-sass');
//var webdriver = require('gulp-protractor').webdriver_standalone;
//var ngAnnotate = require('gulp-ng-annotate');
//var protractor = require('gulp-protractor').protractor;
//var deploy = require('gulp-gh-pages');

var handleError = function (err) {
  console.log(err.name, ' in ', err.plugin, ': ', err.message);
  this.emit('end');
};

// Copy
gulp.task('build', ['copy','js'], function () {
  return es.concat();
});

// Copy
gulp.task('copy', ['js'], function () {
  return es.concat(
    // update index.html to work when built
    gulp.src(['app/index.html'])
      .pipe(gulp.dest('dist')),
    // copy config-require
    gulp.src(['app/scripts/config-require.js'])
      .pipe(uglify().on('error', handleError))
      .pipe(gulp.dest('dist/scripts')),
    gulp.src(['source/vendor/**/*'])
      .pipe(gulp.dest('dist/vendor')),
    // minify requirejs
    gulp.src(['build/vendor/requirejs/require.js'])
      .pipe(uglify().on('error', handleError))
      .pipe(gulp.dest('build/vendor/requirejs'))
  );
});

// JavaScript
gulp.task('js', function () {
  var configRequire = require('./app/scripts/config-require.js');
  var configBuild = {
    baseUrl: 'app',
    insertRequire: ['scripts/main'],
    name: 'scripts/main',
    optimize: 'none',
    out: 'allo.js',
    wrap: true
  };
  var config = _(configRequire).extend(configBuild);
  //var config = configRequire;

  return gulp.src('app/scripts/main.js')
    //.pipe(debug({verbose:true}))
    .pipe(rjs(config).on('error', handleError))
    //.pipe(ngAnnotate())
    .pipe(uglify().on('error', handleError))
    .pipe(gulp.dest('dist/scripts'));
  //return rjs(config)
    ////.pipe(ngAnnotate())
    ////.pipe(uglify().on('error', handleError))
    //.pipe(gulp.dest('dist/scripts')).on('error', handleError);
});

// Karma
gulp.task('karma', function () {
  return gulp.src(['no need to supply files because everything is in config file'])
    .pipe(karma({
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
gulp.task('watch', ['karma'], function () {
  //gulp.run('sass');
  gulp.run('karma');

  //gulp.watch('source/sass/**/*.scss', function () {
    //gulp.run('sass');
  //});

  // enable Livereload
  livereload.listen();
  gulp.watch([
    'app/index.html',
    'app/scripts/**/*'
  ]).on('change', livereload.changed);
});

gulp.task('default', ['js', 'copy'], function () {
  gulp.run('karma-ci');
  gulp.run('protractor-ci');
});

// Sass
//gulp.task('sass', function () {
  //return gulp.src(['source/sass/*.scss', '!source/sass/_*.scss'])
    //.pipe(sass({
      //bundleExec: true,
      //require: [
        //'arkush/extensions',
        //'sass-globbing'
      //],
      //style: 'compressed'
    //}).on('error', handleError))
    //.pipe(autoprefix().on('error', handleError))
    //.pipe(gulp.dest('source/assets/css'));
//});

// Bump version
//gulp.task('bump-version', function () {
  //spawn('git', ['rev-parse', '--abbrev-ref', 'HEAD']).stdout.on('data', function (data) {
//
    //// Get current branch name
    //var branch = data.toString();
//
    //// Verify we're on a release branch
    //if (/^release\/.*/.test(branch)) {
      //var newVersion = branch.split('/')[1].trim();
//
      //// Update client index.html
      //gulp.src('./source/index.html')
        //.pipe(replace(/(bust=v)(\d*\.?)*/g, '$1' + newVersion))
        //.pipe(gulp.dest('./source'));
//
      //var updateJson = function (file) {
        //gulp.src(file)
          //.pipe(replace(/("version" *: *")([^"]*)(",)/g, '$1' + newVersion + '$3'))
          //.pipe(gulp.dest('./'));
      //};
//
      //updateJson('./bower.json');
      //updateJson('./package.json');
//
      //console.log('Successfully bumped to ' + newVersion);
    //} else {
      //console.error('This task should be executed on a release branch!');
    //}
  //});
//});

// Protractor
//gulp.task('protractor', function () {
  //return gulp.src('source/js/**/*.e2e.js')
    //.pipe(protractor({ configFile: 'p.conf.js' }));
//});
//
//gulp.task('protractor-ci', function () {
  //return gulp.src('source/js/**/*.e2e.js')
    //.pipe(protractor({ configFile: 'p-compiled.conf.js' }));
//});
//
//gulp.task('webdriver', webdriver);

// Publish to GitHub Pages
//gulp.task('gh-pages', ['js', 'copy'], function () {
  //return gulp.src("./build/**/*")
    //.pipe(deploy());
//});

