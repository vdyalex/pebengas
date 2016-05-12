'use strict';

let gulp      = require('gulp');
let bower     = require('bower-files')();
let clean     = require('gulp-clean-css');
let concat    = require('gulp-concat');
let uglify    = require('gulp-uglify');
let sync      = require('gulp-sync')(gulp);
let config    = require('./config.js');

function stylesTask() {
  return gulp
    .src(bower.ext(config.dependencies.styles.ext).files)
    .pipe(concat(config.dependencies.styles.concat))
    .pipe(clean(config.dependencies.styles.clean))
    .pipe(gulp.dest(config.dependencies.styles.dest));
}

function scriptsTask() {
  return gulp
  .src(bower.ext(config.dependencies.scripts.ext).files)
  .pipe(concat(config.dependencies.scripts.concat))
  .pipe(uglify())
  .pipe(gulp.dest(config.dependencies.scripts.dest));
}

function fontsTask() {
  return gulp
    .src(bower.ext(config.dependencies.fonts.ext).files)
    .pipe(gulp.dest(config.dependencies.fonts.dest));
}

gulp.task('bower-styles', stylesTask);
gulp.task('bower-scripts', scriptsTask);
gulp.task('bower-fonts', fontsTask);

gulp.task('dependencies', sync.async(['bower-styles', 'bower-scripts', 'bower-fonts'], 'dependencies'));
