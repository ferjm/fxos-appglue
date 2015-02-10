var gulp = require('gulp');
var replace = require('gulp-replace');

const ipdlPath = 'whatever';

gulp.task('default', function() {
  return gulp.src(['ipdl.js'])
             .pipe(replace(/IPDL_PATH/g, ipdlPath))
             .pipe(gulp.dest('./dist'));
});
