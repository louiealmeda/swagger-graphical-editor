(function() {
	'use strict';

	angular
		.module('app.main.swPath')
		.controller('SwPathController', SwPathController);

	/* @ngInject */
	function SwPathController($state, $stateParams, Path, Operation){
		var vm = this;
		vm.property = 'SwPathController';
		
		vm.operationTypes = [
			'get',
			'put',
			'post',
			'delete',
			'options',
			'head',
			'patch'
		];
		
		vm.goTo = goTo;
		vm.saveChanges = saveChanges;
		vm.addOperation = addOperation;
		vm.isAdded = isAdded;
		
		vm.path = Path.find($stateParams.path).then(function(data){
			vm.path = data;
		});
		
		activate();

		////////////////

		
		function isAdded(item){
			
			
			
		}
		
		function addOperation(operation){
			
			Operation.create({key: operation, pathID: vm.path.id})
			.then(function(operation){
				
				vm.operations = Operation.getAll();
				console.log(Operation.getAll());
			});
			
		}

		function saveChanges(){
			Path.update(vm.path.id, vm.path);
		}
		
		function goTo(operation){
			$state.go("path.operation", {operation:operation});
			vm.operation = operation;
			console.log(operation);
		}
		
		function activate() {
			
//			Operation.destroyAll();
			vm.operations = Operation.findAll({pathID: vm.path.id}).then(function(){
				vm.operations = Operation.getAll();
				console.log(Operation.getAll());
			});
			
		}
	}
})();