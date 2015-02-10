'use strict';

var gulp = require('gulp');
var replace = require('gulp-replace');
var gutil = require('gulp-util');

module.exports = function(fxosGluePath, ipdlPath) {
  if (!fxosGluePath || !ipdlPath) {
    throw new gutil.PluginError('gulp-<%= pluginName %>',
                                '`fxosGluePath` and `ipdlPath` required');
  }
  return gulp.src([fxosGluePath + '/ipdl.js'])
           .pipe(replace(/IPDL_PATH/g, ipdlPath))
           .pipe(gulp.dest(fxosGluePath + '/js'));
};
