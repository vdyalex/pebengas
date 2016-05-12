'use strict';

let gulp    = require('gulp');
let jade    = require('gulp-jade');
let flatten = require('gulp-flatten');
let config  = require('./config.js');

function viewsTask() {
  return gulp
    .src(config.views.src)
    .pipe(flatten())
    .pipe(jade())
    .pipe(gulp.dest(config.views.dest));
}

gulp.task('views', viewsTask);
