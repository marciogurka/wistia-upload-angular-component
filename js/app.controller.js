(function (){
	'use strict';

	angular
	.module('App')
	.controller('AppController', AppController);

	function AppController () {
		var ac = this;

		ac.video = {
			name: 'Spawn'
		};
	}

})()