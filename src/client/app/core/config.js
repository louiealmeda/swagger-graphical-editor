(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(routeConfig);
    core.config(angularUI);
	
	
	/* @ngInject */
	function routeConfig ($stateProvider, $urlRouterProvider) {
		
		$urlRouterProvider.otherwise('/');
		
	}

	/* @ngInject */
	function angularUI ($tooltipProvider) {
		
		$tooltipProvider.options({
			appendToBody: true
		});
		
	}

})();
