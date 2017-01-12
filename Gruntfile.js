module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      files: ['css/*.scss', 'js/*.js', '*.html'],
      tasks: ['sass', 'uglify']
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/app.js',
        dest: 'js/build/app.min.js'
      }
    },

    sass: {                         
      dist: {                       
        options: {                      
          style: 'compressed'
        },
        files: {                      
          'css/build/main.css': 'css/main.scss'      
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};