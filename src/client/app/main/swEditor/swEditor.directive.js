(function () {
	'use strict';

	angular
		.module('app.main.swEditor')
		.directive('swEditor', swEditor);
	

	/* @ngInject */
	function swEditor() {
		// Usage:
		//
		// Creates:
		//
		var directive = {
			bindToController: true,
			controller: 'SwEditorController',
			templateUrl: 'app/main/swEditor/swEditor.html',
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