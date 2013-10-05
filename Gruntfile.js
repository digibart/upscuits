module.exports = function (grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			prod: ['Gruntfile.js', './source/js/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					validthis: true,
					laxcomma: true,
					laxbreak: true,
					browser: true,
					eqnull: true,
					debug: true,
					devel: true,
					boss: true,
					expr: true,
					asi: true
				}
			}
		},
		concat: {
			options: {
				separator: '\n;'
			},
			vendors: {
				src: ['./source/js/libs/jquery.min.js', './source/js/libs/bootstrap-tooltip.js', './source/js/libs/bootstrap-popover.js', './source/js/libs/bootstrap-modal.js', './source/js/libs/mustache.js', './source/js/libs/date.js'],
				dest: './build/js/vendors.js'
			},
		},
		uglify: {
			prod: {
				files: {
					'./build/js/vendors.min.js': ['./build/js/vendors.js']
				}
			}
		},
		replace: {
			date: {
				options: {
					patterns: [{
						match: 'timestamp',
						replacement: '<%= grunt.template.today() %>'
					}]
				},
				files: [{
					expand: true,
					flatten: true,
					src: ['./source/js/upscuits.js'],
					dest: './build/js/'
				}]
			},
			version: {
				options: {
					patterns: [{
						match: 'version',
						replacement: '<%= pkg.version %>'
					}]
				},
				files: [{
					expand: true,
					flatten: true,
					src: ['./source/index.html'],
					dest: './build/'
				}]
			}

		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-replace');

	if (!grunt.file.exists('./source/js.config.js')) {
		grunt.log.warn('./source/js/config.js not found!');
	}

	// Default task(s).
	grunt.registerTask('default', ['jshint', 'concat', 'replace', 'uglify']);

};