(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(routeConfig);
	
	
	/* @ngInject */
	function routeConfig ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');
		
	}

})();
