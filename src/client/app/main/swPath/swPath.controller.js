(function() {
	'use strict';

	angular
		.module('app.main.swPath')
		.controller('SwPathController', SwPathController);

	/* @ngInject */
	function SwPathController($state){
		var vm = this;
		vm.property = 'SwPathController';
		
		vm.operations = [
			'get',
			'post',
			'put',
			'delete',
			'patch'
		];
		
		vm.goTo = goTo;
		
		activate();

		////////////////

		function goTo(operation){
			$state.go("path.operation", {operation:operation});
			vm.operation = operation;
			console.log(operation);
		}
		
		function activate() {
			
		}
	}
})();