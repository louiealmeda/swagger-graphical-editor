(function() {
	'use strict';

	angular
		.module('app.com.forms')
		.controller('PromptFormController', PromptFormController);

	/* @ngInject */
	function PromptFormController(Swagger, $mdDialog){
		var vm = this;
		vm.property = 'PromptFormController';
		
		vm.cancel = cancel;
		vm.ok = ok;
		
		vm.data = {};
		
		activate();

		////////////////
		
		function activate() {
			
		}
		
		function ok(){
			$mdDialog.hide(vm.data);
		}
		
		
		function cancel () {
			$mdDialog.cancel();
		}
		
		
	}
})();