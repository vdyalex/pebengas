'use strict';

const gulp    = require('gulp');
const eslint  = require('gulp-eslint');
const config  = require('./config.js');

function eslintTask() {
  return gulp
    .src(config.eslint.src)
    .pipe(eslint())
    .pipe(eslint.format());
}

gulp.task('eslint', eslintTask);
