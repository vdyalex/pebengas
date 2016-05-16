'use strict';

let gulp      = require('gulp');
let argv      = require('yargs').argv;
let history   = require('connect-history-api-fallback');
let config    = require('./config.js');

function browserTask() {

  let options = {
    server: {
      baseDir: config.path.root.public
    },
    notify: false,
    middleware: [ history() ],
    reloadDelay: 100,
    open: argv.open
  };

  return config.browser.init(options);
};

gulp.task('browser', browserTask);
