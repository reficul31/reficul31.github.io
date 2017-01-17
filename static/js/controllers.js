angular.module('mainApp.controllers',[])
.controller('homeCtrl', function mainCtrl($scope){
	$scope.title = 'This is HOME';
})
.controller('blogCtrl', function blogCtrl($scope){
	$scope.title = 'This is BLOG';
})
.controller('projectsCtrl', function projectsCtrl($scope){
	$scope.title = 'This is Projects';
})