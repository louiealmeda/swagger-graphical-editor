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

		activate();

		////////////////

		function activate() {

			vm.document = Document.current.then(function(document){
				vm.document = Document.current;				
			});
			
			vm.documents = Document.getRecent().then(function(recentDocs){
				vm.documents = recentDocs;
			});


		}

		function clearAllRecent () {
			console.log('Clearing all recent');
			Swagger.destroyAll()
				.then(function(){

				vm.documents = [];

			});
		}

		function openRecent(document){
			
			Document.open(document).then(function(){
				console.log('opened', document);
				vm.document = document;

				console.log('getting recent');
				
				vm.documents = Document.getRecent().then(function(recentDocs){
					vm.documents = recentDocs;
				});
				
			}).catch(function(e){
				console.log('error opening file', e);
			});
			
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

		}
	}
})();