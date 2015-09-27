(function () {
	'use strict';

	angular
		.module('app.com.swSideBar')
		.directive('swSideBar', swSideBar);
	

	/* @ngInject */
	function swSideBar() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			controller: 'SwSideBarController',
			templateUrl: 'app/com/swSideBar/swSideBar.html',
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