var gulp = require('gulp');
var replace = require('gulp-replace');
var to5 = require('gulp-6to5');
var runSequence = require('run-sequence');

const ipdlPath = 'whatever';

/**
 * converts javascript to es5. this allows us to use harmony classes and modules.
 */
gulp.task('to5', function () {
  var files = [
      'js/**/*.js',
    ];

  try {
    return gulp.src(files)
      .pipe(to5({
          modules: 'amd'
        }).on('error', function(e) {
          console.log('error running 6to5', e);
        })
      )
      .pipe(gulp.dest('dist/'));
  }  catch(e) {
    console.log('Got error in 6to5', e);
  }
});

gulp.task('ipdlpath', function() {
  return gulp.src(['ipdl.js'])
             .pipe(replace(/IPDL_PATH/g, ipdlPath))
             .pipe(gulp.dest('js'));
});

gulp.task('default', function() {
  runSequence('ipdlpath', 'to5');
});
