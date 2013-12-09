'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        destDir: 'espowered',

        mochacli: {
            options: {
                ui: 'bdd',
                reporter: 'spec'
            },
            all: ['<%= destDir %>/*.js']
        },
        espower: {
            test: {
                files: [
                    {
                        expand: true,
                        cwd: 'test/',
                        src: ['**/*.js'],
                        dest: '<%= destDir %>/',
                        ext: '.js'
                    }
                ]
            }
        },
        clean: {
            test: ['<%= destDir %>/']
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
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-espower');
    grunt.loadNpmTasks('grunt-mocha-cli');

    grunt.registerTask('test', ['clean', 'espower:test', 'mochacli']);

    // Default task.
    grunt.registerTask('default', ['test']);

};
