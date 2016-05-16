'use strict';

let gulp    = require('gulp');
let sync    = require('gulp-sync')(gulp);
let config  = require('./config.js');

gulp.task('watch', function() {

  gulp.watch(config.views.watch, ['views', 'reload']);

  gulp.watch(config.styles.watch, ['styles', 'reload']);

  gulp.watch(config.scripts.src, ['eslint', 'scripts', 'reload']);

  gulp.watch(config.dependencies.watch, sync.async('dependencies', 'styles', 'reload'));
});
