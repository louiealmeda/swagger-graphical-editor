(function() {
	'use strict';

	angular
		.module('app.com.swTopMenu')
		.controller('TopMenuController', TopMenuController);

	/* @ngInject */
	function TopMenuController(Swagger, Document, $mdDialog){
		var vm = this;
		vm.property = 'TopMenuController';
		

		vm.file = {
			new: fileNew,
			recent: {
				clearAll: clearAllRecent,
				open: openRecent
			}
		};
		
		vm.document = Document.current.then(function(document){
			vm.document = Document.current;
		});
		
		Swagger.findAll()
		.then(function(){
			vm.documents = Swagger.getAll();
		});
		
		console.log(vm.document);
		
		activate();

		////////////////
		
		function activate() {
		
		}
		
		function clearAllRecent () {
			console.log('Clearing all recent');
			Swagger.destroyAll()
			.then(function(){
				
				vm.documents = [];
				
			});
		}
		
		function openRecent(document){
			
			Document.open(document);
			vm.document = document;
		}
		
		function fileNew (event) {
			
			$mdDialog.show({
				controller: 'NewDocumentFormController',
				templateUrl: 'app/com/forms/newDocument/newDocument.html',
				controllerAs: 'vm',
				parent: angular.element('body'),
				targetEvent: event,
				clickOutsideToClose: true
			})
			.then(function(data){
				
				vm.document = Document.current;
				
			});
			;
			
		}
	}
})();