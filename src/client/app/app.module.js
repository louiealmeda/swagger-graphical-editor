(function () {
	'use strict';

	var app = angular.module('app', [
		'app.core',
		'app.main',
		'app.com',
		'app.sdk',
		'app.blocks'
	]);

	app.run(['$state', function ($state) {}]);

})();
