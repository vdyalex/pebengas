'use strict';

let gulp    = require('gulp');
let sync    = require('gulp-sync')(gulp);
let config  = require('./config.js');

gulp.task('watch', function() {

  gulp.watch(config.views.watch, ['views']);

  gulp.watch(config.styles.watch, ['styles']);

  gulp.watch(config.scripts.src, ['scripts']);
  gulp.watch(config.eslint.src, ['eslint']);

  gulp.watch(config.dependencies.watch, sync.async('dependencies', 'styles'));
});
