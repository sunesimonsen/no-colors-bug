module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');
    grunt.initConfig({
        pkg: pkg,
        karma: {
            unit: {
                options: {
                    frameworks: ['jasmine'],
                    files: [
                        'node_modules/es5-shim/es5-shim.js',
                        'node_modules/unexpected/unexpected.js',
                        'test/**/*.js'
                    ],
                    singleRun: true,
                    browsers: ['PhantomJS']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test', ['karma']);
};
