(function() {
	'use strict';

	angular
		.module('app.com.swTopMenu')
		.controller('TopMenuController', TopMenuController);

	/* @ngInject */
	function TopMenuController($mdDialog){
		var vm = this;
		vm.property = 'TopMenuController';
		

		vm.file = {};
		vm.file.new = fileNew;
		
		activate();

		////////////////
		
		function activate() {
		}
		
		function fileNew (event) {
			
			$mdDialog.show({
				controller: 'NewDocumentFormController',
				templateUrl: 'app/com/forms/newDocument/newDocument.html',
				controllerAs: 'vm',
				parent: angular.element('body'),
				targetEvent: event,
				clickOutsideToClose: true
			});
			
		}
	}
})();