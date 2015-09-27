(function() {
	'use strict';

	angular
		.module('app.com.swSideBar')
		.controller('SwSideBarController', SwSideBarController);

	/* @ngInject */
	function SwSideBarController($state){
		var vm = this;
		vm.property = 'SwSideBarController';
		

		vm.paths = [
			'/employees',
			'/employees/{id}',
			'/authorizations',
			'/authorizations/{id}',
			'/positions',
			'/positions/{id}',
			'/positions/{id}/authorizations',
			'/positions/{id}/authorizations/{id}'
			
		];
		
		vm.goTo = goTo;
		
		activate();
		
		////////////////

		function goTo(path){
			var tmp = path.replace(/\//g, "").replace(/{/g, ":").replace(/}(.)/,"-$1").replace(/}/g,"");
			
			$state.go('path', {name:tmp});
		}
		
		function activate() {
		}
	}
})();