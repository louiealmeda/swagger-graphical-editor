/* global Schemator :false, validate:false */
(function() {
    'use strict';

    angular
        .module('app.core')
		.constant('validate', validate)
		.factory('schema', schema)
	;
	
	/* @ngInject */
	function schema(){
		
		return new Schemator();
		
	}
	
})();
