module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    
    sass: {
      options: {
        includePaths: ['scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'style.css': 'scss/styles.scss'
        }        
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/prod/**/*.js'],
        dest: 'js/main.min.js'
      },

    },
    
    uglify: {
      dist: {
        files: {
          'js/main.min.js': ['js/prod/**/*.js']
        }
      }
    },
    
    watch: {
      grunt: { files: ['Gruntfile.js'] },
      
      javascripts: {
        files: ['js/prod/**/*.js'],
        tasks: ['concat', 'uglify']
      },
      
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    },


  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['concat', 'uglify', 'watch']);

}