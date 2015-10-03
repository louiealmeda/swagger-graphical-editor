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

				},
				hasOne: {

					info: {
						localField : 'info',
						foreignKey : 'swaggerID',
						enumerable: true
					}

				}
			}
//			,
//			validate: function (swagger, cb) {
//				var err = validate(swagger, scheme);
//				if (err) {
//					cb(err);
//				} else {
//					cb(null, err);
//				}
//			}

		});

		Swagger.schema = swaggerSchema;
		
		return Swagger;
	}
})();