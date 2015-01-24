var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var compass      = require('gulp-compass');
// var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var config       = require('../config').compass;
var changed      = require('gulp-changed');
var imagemin     = require('gulp-imagemin');

// var autoprefixer = require('gulp-autoprefixer');

gulp.task('compass', function () {
  gulp.src(config.src)
    .pipe(compass(config.settings))
    .on('error', handleErrors)
    // .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

  var imgConfig = require('../config').images;

  return gulp.src(imgConfig.src)
    .pipe(changed(imgConfig.dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(imgConfig.dest))
    .pipe(browserSync.reload({stream:true}));
});
