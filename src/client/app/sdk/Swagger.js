(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('Swagger', Swagger);

	/* @ngInject */
	function Swagger(DS, validate, schema, schemaErrorHandler){
	
		
		
		
		var swaggerSchema = schema.defineSchema('Swagger', {
			swagger: 'string',
			info: {
				title: 'string',
				version: 'string'
			}
		});
		
		swaggerSchema.setDefaults({
			swagger: '2.0',
			info: {}
		});

		var errors = swaggerSchema.validateSync(swaggerSchema.getDefaults());
		console.log(errors);
		console.log(schemaErrorHandler.getEndPointPath(errors, 'errors'));
		
		var Swagger = DS.defineResource({

			name: 'swagger',
			relations: {

				hasMany: {
					path: {
						localField: 'paths',
						foreignKey: 'swaggerID'
					}
				},
				hasOne: {

				}
			}

		});

		Swagger.schema = swaggerSchema;
		
		return Swagger;
	}
})();