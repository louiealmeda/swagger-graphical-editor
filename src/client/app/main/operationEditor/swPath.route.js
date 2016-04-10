(function () {
	'use strict';

	angular
		.module('app.main.operationEditor')
		.config(route);
	
		
		/* @ngInject */
		function route ($stateProvider, $urlRouterProvider) {
			
			$stateProvider
				.state('home.path.operation', {
					url: '/operation/:operation',
					templateUrl: 'app/main/operationEditor/operationEditor.html',
					controller: 'OperationEditorController',
					controllerAs: 'vm'
				});
		}
})();