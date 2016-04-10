(function() {
	'use strict';

	angular
		.module('app.main.operationEditor')
		.controller('OperationEditorController', OperationEditorController);

	/* @ngInject */
	function OperationEditorController($state, $stateParams){
		var vm = this;
		vm.property = 'OperationEditorController';
		
		
		vm.goTo = goTo;
		activate();

		////////////////

		function goTo(operation){
			$state.go(".operation", operation);
			vm.operation = operation;
		}
		
		function activate() {
			vm.operationName = $stateParams.operation;
		}
	}
})();