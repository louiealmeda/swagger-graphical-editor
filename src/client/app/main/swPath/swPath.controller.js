(function() {
	'use strict';

	angular
		.module('app.main.swPath')
		.controller('SwPathController', SwPathController);

	/* @ngInject */
	function SwPathController($state, $stateParams, Path, Operation){
		var vm = this;
		vm.property = 'SwPathController';

		vm.goTo = goTo;
		vm.saveChanges = saveChanges;
		vm.addOperation = addOperation;
		vm.isAdded = isAdded;
		vm.editMode = editMode;
		activate();

		////////////////


		function isAdded(item){



		}

		function editMode(){
			
			vm.isEditingPath = true;
			var el = angular.element('sw-title');
			el.focus();
		}
		
		function addOperation(operation){

			Operation.create({key: operation, pathID: vm.path.id})
				.then(function(operation){

				vm.operations.push(operation);
				//				console.log(Operation.getAll());

				vm.operationTypes = Operation.getTypes(vm.operations);
			});

		}

		function saveChanges(){
			Path.update(vm.path.id, vm.path);
			
			vm.isEditingPath = false;
		}

		function goTo(operation){
			$state.go("home.path.operation", {operation:operation});
			vm.operation = operation;
			console.log(operation);
		}

		function activate() {
			
			
			
			vm.path = Path.find($stateParams.path).then(function(data){
				vm.path = data;

				
				vm.operations = Operation.findAll({pathID: vm.path.id}).then(function(operations){
					vm.operations = operations;
					console.log('activated', vm.operations);
					
					vm.operationTypes = Operation.getTypes(vm.operations);
				});

			});

		}
	}
})();