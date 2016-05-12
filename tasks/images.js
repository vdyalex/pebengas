'use strict';

let gulp    = require('gulp');
let config  = require('./config.js');

function imagesTask() {
  return gulp
    .src(config.images.src)
    .pipe(gulp.dest(config.images.dest));
}

gulp.task('images', imagesTask);
