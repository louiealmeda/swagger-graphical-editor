(function() {
	'use strict';

	angular
		.module('app.main.swEditor')
		.controller('SwEditorController', SwEditorController);

	/* @ngInject */
	function SwEditorController(Swagger, Info){
		var vm = this;
		vm.property = 'SwEditorController';

//		Swagger.destroyAll();
//		Info.destroyAll();
//		.then(function(){
//			
//		Swagger.create({
//			id:1, 
//			swagger: '2.0', 
//			host: 'HostName', 
//			infoID: 1
//		});
////		});
//		Info.create({id: 1, title: 'test', swaggerID: 1});
		
		Swagger.findAll({}, {with:['info']})
		.then(function(){
			
			console.log(Swagger.getAll());
			
		});
		
		Info.findAll()
		.then(function(){
			
			console.log(Info.getAll());
			
		});

		activate();

		////////////////

		function activate() {
		}
	}
})();