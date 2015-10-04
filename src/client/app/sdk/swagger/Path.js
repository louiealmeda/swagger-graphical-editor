(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('Path', Path);

	/* @ngInject */
	function Path(DS, validate, schema, schemaErrorHandler){
		
		var swaggerSchema = schema.defineSchema('Path', {
			key: 'string'
		});
		
		swaggerSchema.setDefaults({
			
		});

		var errors = swaggerSchema.validateSync(swaggerSchema.getDefaults());
		console.log(errors);
		console.log(schemaErrorHandler.getEndPointPath(errors, 'errors'));
		
		var Path = DS.defineResource({

			name: 'path',
			relations: {

				hasMany: {
					operation: {
						localField: 'operations',
						foreignKey: 'pathID'
					}
				},
				hasOne: {

				}
			}

		});

		Path.schema = swaggerSchema;
		
		return Path;
	}
})();