'use strict';

// http://rhumaric.com/2013/07/renewing-the-grunt-livereload-magic/

module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
 
  grunt.initConfig({
    express: {
      all: {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: [__dirname]
        }
      }
    },
 
    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  });
 
  grunt.registerTask('hangman', [
    'express',
    'open',
    'express-keepalive'
  ]);
};
