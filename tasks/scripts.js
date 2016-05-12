'use strict';

let gulp        = require('gulp');
let babel       = require('gulp-babel');
let concat      = require('gulp-concat');
let uglify      = require('gulp-uglify');
let config      = require('./config.js');

function scriptsTask() {
  return gulp
    .src(config.scripts.src)
    .pipe(babel())
    .pipe(concat(config.scripts.concat))
    .pipe(uglify(config.scripts.uglify))
    .pipe(gulp.dest(config.scripts.dest));
}

gulp.task('scripts', scriptsTask);
