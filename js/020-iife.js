(function(){ 
	'use strict';

	var myController = function(){
		var ctrl = this;

		ctrl.loadMeSomething = function(){
			ctrl.something = 'SHOTZ!!';
		};

		return ctrl;
	};

	angular.module('myModule')
		.controller('MyCtrl', [myController]);
}());