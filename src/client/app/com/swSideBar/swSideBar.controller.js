(function() {
	'use strict';

	angular
		.module('app.com.swSideBar')
		.controller('SwSideBarController', SwSideBarController);

	/* @ngInject */
	function SwSideBarController(Document, $state, Path, $stateParams){
		var vm = this;
		vm.property = 'SwSideBarController';


		//		vm.paths = [
		//			'/employees',
		//			'/employees/{id}',
		//			'/authorizations',
		//			'/authorizations/{id}',
		//			'/positions',
		//			'/positions/{id}',
		//			'/positions/{id}/authorizations',
		//			'/positions/{id}/authorizations/{id}'
		//			
		//		];

		vm.document = Document.current;

		vm.goTo = goTo;
		vm.newPath = newPath;
		vm.isActive = isActive;
		activate();

		////////////////
		
		function newPath(event){
			
			Path.create({swaggerID: vm.document.id, key: '/untitled'})
			.then(function(data){
				
				vm.goTo(data.id);
				
			});
			
		}
		
		function isActive(path){
			return path == $stateParams.path;
		}

		function goTo(path){
//			var tmp = path.replace(/\//g, '').replace(/{/g, ':').replace(/}(.)/,'-$1').replace(/}/g,'');

			$state.go('path', {path:path});
		}

		function activate() {
			
			Path.findAll()
			.then(function(){
				console.log(Path.getAll());
			});
			
		}
	}
})();