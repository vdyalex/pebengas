'use strict';

let gulp    = require('gulp');
let config  = require('./config.js');

function reloadTask() {
  return config.browser.reload();
}

gulp.task('reload', reloadTask);
