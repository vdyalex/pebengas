'use strict';

let gulp    = require('gulp');
let pug     = require('gulp-pug');
let flatten = require('gulp-flatten');
let config  = require('./config.js');

function viewsTask() {
  return gulp
    .src(config.views.src)
    .pipe(flatten())
    .pipe(pug())
    .pipe(gulp.dest(config.views.dest));
}

gulp.task('views', viewsTask);
