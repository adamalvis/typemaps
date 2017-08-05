module.exports = function (grunt) {

    grunt.initConfig({
        php: {
            dist: {
                options: {
                    port: 5000
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'dist/css/app.css': 'src/sass/app.scss'
                }
            }
        },
        watch: {
            files: ['src/sass/*.scss', 'src/ts/**/*.ts', 'src/js/**/*.js', 'index.html'],
            tasks: ['sass', 'exec:typescript', 'copy'],
            options: {
                livereload: true,
            },
        },
        open: {
            all: {
                path: 'http://localhost:5000',
            }
        },
        exec: {
            typescript: 'tsc'
        },
        copy: {
            js: {
                expand: true,
                cwd: 'src/js',
                src: 'start.js',
                dest: 'dist/js',
            },
            templates: {
                expand: true,
                cwd: 'src/templates',
                src: '*.html',
                dest: 'dist/templates',
            },
        }
    });

    grunt.loadNpmTasks('grunt-php');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('compile', ['sass', 'exec', 'copy'])
    grunt.registerTask('default', ['php', 'open', 'watch'])

};