/*
 * grunt-easy-mongo-fixture
 * https://github.com/ivpusic/grunt-easy-mongo-fixture
 *
 * Copyright (c) 2014 Ivan Pusic
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    easy_mongo_fixture: {
      load: {
        options: {
          host: '127.0.0.1',
          port: 27017,
          database: 'test',
          dir: '/home/ivpusic/projects/bidding/server/modules/grunt-easy-mongo-fixture',
          override: true,
        },
        collections: ['products', 'categories'],
        action: 'load'
      },

      save: {
        options: {
          host: '127.0.0.1',
          port: 27017,
          database: 'test',
          dir: '/home/ivpusic/projects/bidding/server/modules/grunt-easy-mongo-fixture',
          override: true,
        },
        collections: ['products', 'categories'],
        action: 'save'
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');


  // By default, lint and run all tests.
  grunt.registerTask('fixture:save', ['easy_mongo_fixture:save']);
  grunt.registerTask('fixture:load', ['easy_mongo_fixture:load']);
};
