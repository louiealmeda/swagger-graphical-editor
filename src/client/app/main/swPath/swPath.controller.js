(function() {
	'use strict';

	angular
		.module('app.main.swPath')
		.controller('SwPathController', SwPathController);

	/* @ngInject */
	function SwPathController(){
		var vm = this;
		vm.property = 'SwPathController';
		

		activate();

		////////////////

		function activate() {
		}
	}
})();