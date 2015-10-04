(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('Document', Document);

	/* @ngInject */
	function Document(Swagger, Path, Operation){
	
		var Document = {};
		
		Document.current = Swagger.findAll({isOpen:true})
		.then(function(documents){
//			console.log(documents[0]);
			Document.current = documents[0];
			
			/*Testing*/
			
//			var path = Path.create({swaggerID: documents[0].id, key:'/accounts'})	
//			.then(function(){
//				
//				console.log(Path.getAll());
//				
//				Operation.create({key:'get', pathID: path.id});
//				
//			});
			
			
			/*Testing*/
		});
		
		Document.recent = [];
		
		Document.open = open;
		
		function open(document){
			
			
			Swagger.update(document.id, {isOpen: true});
			Swagger.update(Document.current, {isOpen: false});
			
			Document.recent.unshift(Document.current);
			Document.current = document;
			
		}
		
		return Document;
	}
})();