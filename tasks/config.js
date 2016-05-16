'use strict';

let _env_       = 'development';

let _src_       = './app';        // App directory
let _dest_      = './public';     // Public directory
let _server_    = './server';     // Server directory
let _gulpfile_  = './gulpfile.js' // This file

// Source directories
let src = {
  scripts     : _src_ + '/scripts',
  styles      : _src_ + '/styles',
  images      : _src_ + '/images',
  views       : _src_ + '/views'
}

// Destination directories
let dest = {
  scripts     : _dest_ + '/scripts',
  styles      : _dest_ + '/styles',
  images      : _dest_ + '/images',
  fonts       : _dest_ + '/fonts'
};

let browser = require('browser-sync');

module.exports = {
  path: {
    root: {
      app: _src_,
      public: _dest_,
      server: _server_,
      gulp: _gulpfile_
    }
  },
  eslint: {
    src: [
      _gulpfile_,
      src.scripts + '/**/*.js'
    ]
  },
  views: {
    src: src.views + '/*.pug',
    watch: src.views + '/**/*.pug',
    dest: _dest_
  },
  styles: {
    src: src.styles + '/*.scss',
    watch: src.styles + '/*.scss',
    sass: {
      outputStyle: 'compressed'
    },
    inject: {
      read: false,
      relative: false,
      start: '/* inject:imports */',
      end: '/* endinject */',
      format: '@import \'../..%s\';'
    },
    dest: dest.styles
  },
  scripts: {
    src: [
      src.scripts + '/**/*.js',
      '!' + src.scripts + '/**/*.spec.js'
    ],
    concat: 'app.js',
    uglify: {
      mangle: false
    },
    dest: dest.scripts
  },
  images: {
    src: [
      src.images + '/**/*.png',
      src.images + '/**/*.jpg'
    ],
    dest: dest.images
  },
  dependencies: {
    styles: {
      ext: 'css',
      concat: 'vendor.css',
      dest: dest.styles
    },
    scripts: {
      ext: 'js',
      concat: 'vendor.js',
      dest: dest.scripts
    },
    fonts: {
      ext: ['eot', 'svg', 'ttf', 'woff', 'woff2'],
      dest: dest.fonts
    },
    watch: './bower.json'
  },
  server: {
    script: _server_ + '/app.js',
    ext: 'js',
    ignore: [
      _gulpfile_,
      src.scripts + '/**/*.js',
      dest.scripts + '/**/*.js'
    ],
    env: _env_
  },
  browser: browser.create()
};
