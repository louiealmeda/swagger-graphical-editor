(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('License', License);

	/* @ngInject */
	function License(DS){

		var License = DS.defineResource({

			name: 'license'
			
		});

		return License;
	}
})();