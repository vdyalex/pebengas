'use strict';

let gulp  = require('gulp');
let sync  = require('gulp-sync')(gulp);

let tasks = [
  'dependencies',
  'views',
  'images',
  'styles',
  'scripts'
];

gulp.task('default', sync.async(['eslint', tasks, 'server', 'watch'], 'default'));
