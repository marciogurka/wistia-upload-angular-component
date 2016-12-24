require('angular');
require('angular-route');

(function(){
	'use strict';

	angular
	.module('App', ['ngRoute'])
	.config(RouteConfig)


	RouteConfig.$inject = ['$routeProvider']

	function RouteConfig($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/views/app.html', 
			controller: 'AppController',
			controllerAs: 'ac'
		})
		.otherwise({ redirectTo: '/' });
	}

})();