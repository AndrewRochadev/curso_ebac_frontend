module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                },
                files: {
                    'dist/css/styles.css': 'src/styles/main.less'
                }
            }
        },
        uglify: {
            options: {
            },
            my_target: {
                files: {
                    'dist/scripts/scripts.min.js': ['src/scripts/*.js']
                }
            }
        },

        copy: {
            main: {
                expand: true,
                cwd: 'src/',
                src: 'index.html',
                dest: 'dist/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['less', 'uglify', 'copy']);
};