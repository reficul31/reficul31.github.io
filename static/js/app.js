angular.module('mainApp', [
	'ui.router',
	'ngResource',
	'mainApp.controllers'
])
.config(function($httpProvider, $stateProvider, $urlRouterProvider){
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

	$urlRouterProvider.otherwise('/')
	$stateProvider
	.state('home',{
		url:'/',
		templateUrl:'static/partials/home.html',
		controller:'homeCtrl'
	})
	.state('blog',{
		url:'/blog',
		templateUrl:'static/partials/blog.html',
		controller:'blogCtrl'
	})
	.state('projects',{
		url:'/projects',
		templateUrl:'static/partials/projects.html',
		controller:'projectsCtrl'
	})
});