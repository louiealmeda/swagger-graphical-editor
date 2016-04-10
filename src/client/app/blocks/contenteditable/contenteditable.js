(function() {
	'use strict';

	angular
		.module('app.blocks')
		.directive('contenteditable', contenteditable);

	/* @ngInject */
	function contenteditable(){

		return {
			restrict: "A",
			require: "ngModel",
			scope: {
				singleLine: '=?swDataSingleLine',	
				singleWord: '=?swDataSingleWord'	
			},
			link: function(scope, element, attrs, ngModel) {

				function read() {
					var val = element.html();
					var sanitized = false;
					if(scope.singleLine && val.indexOf('<br>') != -1){
						val = val.replace(/<br>/g, '');
						sanitized = true;
					}
					
					if(scope.singleWord && (val.indexOf('&nbsp;') != -1 || val.indexOf(' ') != -1)){
						val = val.replace(/ |&nbsp;/g, '');
						sanitized = true;
					}
					
					if(sanitized){	
						element.html(val);
					}
					
					ngModel.$setViewValue(val);
				}

				ngModel.$render = function() {
					element.html(ngModel.$viewValue || "");
				};

				element.bind("blur keyup change", function() {
					scope.$apply(read);
				});
			}
		};

	}
})();