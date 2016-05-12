'use strict';

let gulp          = require('gulp');
let bower         = require('bower-files')();
let dependencies  = bower.relative(__dirname).ext('scss').files;
let inject        = require('gulp-inject');
let sass          = require('gulp-sass');
let autoprefixer  = require('gulp-autoprefixer');
let config        = require('./config.js');

function stylesTask() {

  let transform = {
    starttag: config.styles.inject.start,
    endtag: config.styles.inject.end,
    transform: filepath => {
      return util.format(config.styles.inject.format, filepath);
    }
  };

  return gulp
    .src(config.styles.src)
    .pipe(inject(gulp.src(dependencies, config.styles.inject), transform))
    .pipe(sass(config.styles.sass))
    .pipe(autoprefixer())
    .pipe(gulp.dest(config.styles.dest));
};

gulp.task('styles', stylesTask);
