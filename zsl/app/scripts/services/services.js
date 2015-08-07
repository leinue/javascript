angular.module('sbAdminApp')

.factory('User',function(){

	var service={};
	var isLogined=false;

	service.test=function(){
		alert('test');
	};

	service.isLoged=function(){
		return isLogined;
	}

	service.setLogin=function(){
		isLogined=true;
	}

	return service;

});