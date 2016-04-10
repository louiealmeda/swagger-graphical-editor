(function() {
	'use strict';

	angular
		.module('app.sdk')
		.factory('Document', Document);

	/* @ngInject */
	function Document(Swagger, Path, Operation, $q, $state){
	
		var Document = {};
		
		Document.current = Swagger.findAll({isOpen:true})
		.then(function(documents){

			Document.current = documents[0];
			
		});
		
		
		Document.open = open;
		Document.getRecent = getRecent;
		Document.getCurrent = getCurrent;
		
		function open(document){
			
			var deferred = $q.defer();
			
			Document.getCurrent().then(function(current){
				
			
				var promises = [
					Swagger.update(document.id, {isOpen: true, lastOpened: new Date()})
				];
				
				if(current)
					promises.push(Swagger.update(current, {isOpen: false}));

				Document.current = document;
				
				$q.all(promises).then(function(){
					
					$state.go('home',{},{reload:true});
					deferred.resolve(document);
				});
				
			});
			
			return deferred.promise;
			
		}
		
		function getCurrent(){
			
			var deferred = $q.defer();
			
			Swagger.findAll({isOpen:true})
			.then(function(documents){

				if(documents.length == 0)
					deferred.resolve();
				
				deferred.resolve(documents[0]);

			});
			
			return deferred.promise;
			
		}
		
		function getRecent(){
			
			var deferred = $q.defer();
			
			Document.getCurrent().then(process).catch(process);
			
			function process(current){
				current = current || {};
				
				console.log('current: ', current);
				
				Swagger.findAll()
				.then(function(docs){
//					docs = _.reject(docs, {id: current.id});
					docs = _.orderBy(docs, ['lastOpened'], ['desc']);
					
					deferred.resolve(docs);
				});
			
			}
			
			return deferred.promise;
		}
		
		
		return Document;
	}
})();