module.exports = function(grunt) {
  var banner =
      '/** <%= pkg.name %> - v<%= pkg.version %>\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %> Arunjit Singh\n' +
      ' * All Rights Reserved\n' +
      ' * [<%= pkg.repository %>]\n' +
      ' */\n';

  var SRCS = [
    'src/uuid.js',
    'src/jsonrpc.js',
    'src/module.js'
  ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';'
      },
      build: {
        src: SRCS,
        dest: 'build/jsonrpc.bundle.js'
      }
    },

    ngmin: {
      build: {
        src: 'build/jsonrpc.bundle.js',
        dest: 'build/jsonrpc.js'
      }
    },

    wrap: {
      build: {
        src: 'build/jsonrpc.js',
        dest: '.',
        wrapper: ['"use strict";(function(){\n', '\n})();']
      }
    },

    uglify: {
      options: {
        banner: banner
      },
      build: {
        src: 'build/jsonrpc.js',
        dest: 'build/jsonrpc.min.js'
      }
    },

    clean: ['build/*']
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-wrap');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', ['clean', 'concat', 'ngmin', 'wrap', 'uglify']);
};
