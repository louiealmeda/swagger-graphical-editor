(function() {
	'use strict';

	angular
		.module('app.blocks')
		.factory('schemaErrorHandler', schemaErrorHandler);

	/* @ngInject */
	function schemaErrorHandler(){
		
		var handler = {};
		
		handler.getEndPointPath = getEndPointPath;
		
		
		function getEndPointPath (error, end) {
			
			end = end || 'errors';
			
			var key = Object.keys(error)[0];
			
			if(key == end)
				return "";
			
			return "." + key + getEndPointPath(error[key], end);
			
		}
		
		return handler;
	}
})();