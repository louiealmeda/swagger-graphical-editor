(function () {
	'use strict';

	var app = angular
		.module('app.sdk')
		.constant('API_URL', '')
		.config(config)
		.run(run)
	;
	
	/* @ngInject */
	function config (DSLocalStorageAdapterProvider, API_URL ) {
		
		DSLocalStorageAdapterProvider.defaults.basePath = API_URL;
		
	}
	
	/* @ngInject */
	function run (DSLocalStorageAdapter, DS ) {
		
		DS.adapters.localStorage = DSLocalStorageAdapter;
		
		DS.registerAdapter('localStorage', DSLocalStorageAdapter, { default: true });
	}
	
	

})();
