(function() {
	'use strict';

	angular
		.module('app.com.forms')
		.controller('NewDocumentFormController', NewDocumentFormController);

	/* @ngInject */
	function NewDocumentFormController(Swagger, $mdDialog, schemaErrorHandler){
		var vm = this;
		vm.property = 'NewDocumentFormController';
		
		vm.document = Swagger.schema.getDefaults();

		vm.create = create;
		vm.cancel = cancel;
		
		activate();

		////////////////
		
		function activate() {
			
		}
		
		function create () {
			
			var error = Swagger.schema.validateSync(vm.document);
			
			if(error){
				
				var model = schemaErrorHandler.getEndPointPath(error);
				angular.element('[ng-model="vm.document'+model+'"]').focus();
			}
			else
			{
				Swagger.create(vm.document).then(function(){
					console.log('created!');
				});
//				console.log(vm.document);
			}
			
		}
		
		function cancel () {
			
		}
		
		
	}
})();