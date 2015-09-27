(function () {
	'use strict';

	angular
		.module('app.main.swPath')
		.directive('swPath', swPath);
	

	/* @ngInject */
	function swPath() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			controller: 'SwPathController',
			templateUrl: 'app/main/swPath/swPath.html',
			controllerAs: 'vm',
			link: link,
			restrict: 'E',
			scope: {}
		};
		return directive;

		function link(scope, element, attrs, controller) {
			
		}
	}
	
})();