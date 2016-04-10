(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('Operation', Operation);

	/* @ngInject */
	function Operation(DS, validate, schema, schemaErrorHandler){
		
		
		var operationTypes = [
			'get',
			'put',
			'post',
			'delete',
			'options',
			'head',
			'patch'
		];
		
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
		
		
		Operation.getTypes = function(existing){
			
			existing = existing || [];
			
			return _.filter(operationTypes, function(op){
				
				return !_.find(existing, {key: op});
				
			});
			
		}
		
		return Operation;
	}
})();