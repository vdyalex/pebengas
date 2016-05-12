'use strict';

let gulp    = require('gulp');
let nodemon = require('gulp-nodemon');
let argv    = require('yargs').argv;
let config  = require('./config.js');

function serverTask() {
  let options = {
    script: config.server.script,
    quiet: true,
    ext: config.server.ext,
    ignore: config.server.ignore,
    env: {
      ENV: config.server.env,
      open: argv.open
    }
  };

  return nodemon(options);
}

gulp.task('server', serverTask);
