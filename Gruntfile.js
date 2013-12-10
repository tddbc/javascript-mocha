'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        mochacli: {
            options: {
                ui: 'bdd',
                reporter: 'spec',
                require: [ 'espower_loader_helper.js' ]
            },
            all: ['test/*Test.js']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: ['lib/**/*.js']
            },
            test: {
                src: ['test/**/*.js']
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['test']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.registerTask('test', ['mochacli']);

    // Default task.
    grunt.registerTask('default', ['test']);

};
