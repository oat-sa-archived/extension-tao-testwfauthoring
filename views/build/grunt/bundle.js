module.exports = function(grunt) { 

    var requirejs   = grunt.config('requirejs') || {};
    var clean       = grunt.config('clean') || {};
    var copy        = grunt.config('copy') || {};

    var root        = grunt.option('root');
    var libs        = grunt.option('mainlibs');
    var ext         = require(root + '/tao/views/build/tasks/helpers/extensions')(grunt, root);
    var out         = 'output/taoWfAdvTest';

    /**
     * Remove bundled and bundling files
     */
    clean.taowfadvtestbundle = [out,  root + '/taoWfAdvTest/views/js/controllers.min.js'];
    
    /**
     * Compile tao files into a bundle 
     */
    requirejs.taowfadvtestbundle = {
        options: {
            baseUrl : '../js',
            dir : out,
            mainConfigFile : './config/requirejs.build.js',
            paths : { 'taoWfAdvTest' : root + '/taoWfAdvTest/views/js' },
            modules : [{
                name: 'taoWfAdvTest/controller/routes',
                include : ext.getExtensionsControllers(['taoWfAdvTest']),
                exclude : ['mathJax', 'mediaElement'].concat(libs)
            }]
        }
    };

    /**
     * copy the bundles to the right place
     */
    copy.taowfadvtestbundle = {
        files: [
            { src: [out + '/taoWfAdvTest/controller/routes.js'],  dest: root + '/taoWfAdvTest/views/js/controllers.min.js' },
            { src: [out + '/taoWfAdvTest/controller/routes.js.map'],  dest: root + '/taoWfAdvTest/views/js/controllers.min.js.map' }
        ]
    };

    grunt.config('clean', clean);
    grunt.config('requirejs', requirejs);
    grunt.config('copy', copy);

    // bundle task
    grunt.registerTask('taowfadvtestbundle', ['clean:taowfadvtestbundle', 'requirejs:taowfadvtestbundle', 'copy:taowfadvtestbundle']);
};
