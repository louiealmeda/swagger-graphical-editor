(function() {
	'use strict';

	angular
		.module('app.main.swEditor')
		.controller('SwEditorController', SwEditorController);

	/* @ngInject */
	function SwEditorController(){
		var vm = this;
		vm.property = 'SwEditorController';


		activate();

		////////////////

		function activate() {
		}
	}
})();