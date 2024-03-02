module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                },
                files: {
                    'dist/styles.css': 'src/styles.less'
                }
            }
        },
        uglify: {
            options: {
            },
            my_target: {
                files: {
                    'dist/scripts.min.js': ['src/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
};