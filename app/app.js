/*require('angular');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-route');
*/

(function(){
	'use strict';

	angular
	.module('App', ['ngMaterial', 'ngRoute'])
	.config(RouteConfig)


	RouteConfig.$inject = ['$routeProvider']

	function RouteConfig($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: '/app/app/app.html', 
			controller: 'AppController',
			controllerAs: 'ac'
		})
		.otherwise({ redirectTo: '/' });
	}

})();