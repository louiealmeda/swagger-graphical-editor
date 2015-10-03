(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('Info', Info);

	/* @ngInject */
	function Info(DS){

		var Info = DS.defineResource({

			name: 'info',
			relations:{

				hasMany: {

				},
				hasOne: {

					contact: {
						localField: 'contact',
						foreignKey: 'contact'
					},
					license: {
						localField: 'license',
						foreignKey: 'license'
					}

				}
			}
		});

		return Info;
	}
})();