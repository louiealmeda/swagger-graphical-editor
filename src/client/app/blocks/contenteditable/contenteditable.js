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
			link: function(scope, element, attrs, ngModel) {

				function read() {
					ngModel.$setViewValue(element.html());
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