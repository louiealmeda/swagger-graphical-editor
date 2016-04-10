(function() {
	'use strict';

	angular
		.module('app.main.swEditor')
		.controller('SwEditorController', SwEditorController);

	/* @ngInject */
	function SwEditorController(Swagger){
		var vm = this;
		vm.property = 'SwEditorController';


		Swagger.findAll({}, {with:['info']})
		.then(function(){
			
			console.log(Swagger.getAll());
			
		});

		activate();

		////////////////

		function activate() {
		}
	}
})();