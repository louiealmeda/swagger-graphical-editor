(function () {
	'use strict';

	angular
		.module('app.main.swPath')
		.config(route);
	
		
		/* @ngInject */
		function route ($stateProvider, $urlRouterProvider) {
			
			$stateProvider
				.state('path', {
					url: '/path/:path',
					templateUrl: 'app/main/swPath/swPath.html',
					controller: 'SwPathController',
					controllerAs: 'vm'
				});
		}
})();