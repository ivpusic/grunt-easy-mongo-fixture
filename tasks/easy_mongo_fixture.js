/*
 * grunt-easy-mongo-fixture
 * https://github.com/ivpusic/grunt-easy-mongo-fixture
 *
 * Copyright (c) 2014 Ivan Pusic
 * Licensed under the MIT license.
 */

'use strict';

var fixture = require('easy-fixture'),
  MongoFixture = require('easy-mongo-fixture');

module.exports = function (grunt) {

  grunt.registerMultiTask('easy_mongo_fixture', 'Grunt task for easy-mongo-fixture plugin. It helps to you load and save you fixtures', function () {
    var collections = this.data.collections,
      action = this.data.action,
      options,
      mongoFixture;

    // task validation
    if (!collections || !collections.length) {
      grunt.fail.fatal('No collections provided!');
    }

    // extend options object
    options = this.options({
      collections: collections
    });

    // init mongoFixture
    mongoFixture = new MongoFixture(options);
    fixture.use(mongoFixture);

    // task will be async
    var done = this.async();

    // run defined action
    return fixture[action]().then(function () {
      grunt.log.ok(action + ' fixture OK');
      done();
    }).fail(grunt.fail.fatal).
    finally(function () {
      // remove managers from fixture object
      fixture.clear();
    }).done();
  });
};
