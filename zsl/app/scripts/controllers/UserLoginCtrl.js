angular.module('sbAdminApp')
.controller('UserLoginCtrl',function($scope,$location,User){

	$scope.login=function(){
		User.setLogin();
		$location.path('/home');
	};

});