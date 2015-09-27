(function() {
	'use strict';

	angular
		.module('app.com.swTopMenu')
		.controller('TopMenuController', TopMenuController);

	/* @ngInject */
	function TopMenuController(){
		var vm = this;
		vm.property = 'TopMenuController';
		

		activate();

		////////////////

		function activate() {
		}
	}
})();