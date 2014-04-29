# grunt-easy-mongo-fixture

> Grunt task for easy-mongo-fixture plugin. It helps to you load and save you fixtures

For more information about functionalities of this task please look at [easy-mongo-fixture](https://github.com/ivpusic/easy-mongo-fixture) and [easy-fixture](https://github.com/ivpusic/easy-fixture) repositories.

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-easy-mongo-fixture --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-easy-mongo-fixture');
```

# use case

Let we say that you have database with state which is pretty good to be fixture data. In that case you would like to 'freeze' database state and save it to file, and you want to be able to reset database state on that state each time when you want. `easy-mongo-fixture` will help you with that. 

I am using something like this in my project:
```
  grunt.registerTask('fixtures:load', ['easy_mongo_fixture:load', 'easy_postgresql_fixture:load']);
  grunt.registerTask('fixtures:save', ['easy_mongo_fixture:save', 'easy_postgresql_fixture:save']);
```

So each time when I want reset databases state to some previous one I just need to run `grunt fixtures:load`, and if current database state is appropriate to be fixture seed, I can save current state with ``grunt fixtures:save`` command. After this command fixture files will be generated for you. Of course you can update generated fixture files by hand, and then run `grunt fixtures:load` command to populate data with newly added fixture records. Enjoy :)

## The "easy_mongo_fixture" task

### Overview
In your project's Gruntfile, add a section named `easy_mongo_fixture` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  easy_mongo_fixture: {
    options: {
      database: 'test'
    },
    collections: ['products', 'categories'],
    action: 'load'
    }
  }
});
```

### Options

#### options.host
Type: `String`
Default value: `'127.0.0.1'`

Database host

#### options.port
Type: `Number`
Default value: `27017`

Database port

#### options.username
Type: `String`
Default value: `''`

Username for authentication

#### options.password
Type: `String`
Default value: `''`

Password for authentication

#### options.database
**Required**
Type: `String`

Database for work with

#### options.dir
Type: `Path`
Default value: `'Current directory'`

Path on which fixture data will be saved if running `save` action,
or in case or `load` action, path from which fixture files will be loaded into database.

#### options.override
Type: `Boolean`
Default value: `false`

If fixture data already exist, override or not?

### Collections

#### collections
Type: `Array`
**Required**

Array of collections to work with.

### Actions

#### action
Type: `String`
**Required**

Action to execute. Either `save` or `load`.

### Usage Examples


```js
  grunt.initConfig({
    // Configuration to be run (and then tested).
    easy_mongo_fixture: {
      load: {
        options: {
          host: '127.0.0.1',
          port: 27017,
          username: 'username',
          password: 'password'
          database: 'test',
          dir: '/path/to/fixtures',
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
          dir: '/path/to/fixtures',
          override: true,
        },
        collections: ['products', 'categories'],
        action: 'save'
      }
    }
  });
```
