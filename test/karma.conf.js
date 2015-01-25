module.exports = function(config){
	config.set({

		basePath : '../',

		files : [
			'lib/angular/angular.js',
			'lib/angular-mocks/angular-mocks.js',
			'src/*.js',
			'test/unit/*.js'
		],

		autoWatch : true,

		frameworks: ['jasmine'],

		browsers : ['PhantomJS'],

		plugins : [
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-jasmine'
		],

		junitReporter : {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}

	});
};
