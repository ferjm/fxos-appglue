'use strict';
var gulp = require('gulp');
var gutil = require('gulp-util');
var replace = require('gulp-replace');

module.exports = function (ipdlPath) {
	if (!ipdlPath) {
		throw new gutil.PluginError('gulp-fxos-appglue', '`ipdlPath` required');
	}
  return gulp.src(['ipdl.js'])
             .pipe(replace(/IPDL_PATH/g, ipdlPath))
             .pipe(gulp.dest('./dist'));
};
