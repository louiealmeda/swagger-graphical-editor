(function () {
	'use strict';

	angular
		.module('app.com.swTopMenu')
		.directive('swTopMenu', swTopMenu);
	

	/* @ngInject */
	function swTopMenu() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			controller: 'TopMenuController',
			templateUrl: 'app/com/swTopMenu/swTopMenu.html',
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