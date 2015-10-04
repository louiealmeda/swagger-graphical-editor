(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('Operation', Operation);

	/* @ngInject */
	function Operation(DS, validate, schema, schemaErrorHandler){
		
		var swaggerSchema = schema.defineSchema('Operation', {
			key: 'string'
		});
		
		swaggerSchema.setDefaults({
			
		});

		var Operation = DS.defineResource({

			name: 'operation',
			relations: {

				hasMany: {
					
				},
				hasOne: {

				}
			}

		});

		Operation.schema = swaggerSchema;
		
		return Operation;
	}
})();