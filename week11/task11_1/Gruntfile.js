module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: { // Task 
            dist: { // Target 
                options: { // Target options 
                    style: 'expanded'
                },
                files: { // Dictionary of files 
                    'jikexueyuan/jike/stylesheets/main.css': 'jikexueyuan/jike/sass/screen.scss' // 'destination': 'source' 

                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            my_target: {
                files: {
                    'jikexueyuan/jike/min.js/jike.min.js': ['jikexueyuan/jike/js/jike.js']
                }
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: ['jikexueyuan/jike/min.js/*js'],
                dest: 'jikexueyuan/jike/js/jikexueyuan.min.js'
            }

        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass', 'uglify', 'concat']);

};
