angular.module('app', ['app.controllers', 'ui.router', 'app.services'])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	
	.state('login', {
		url: '/login',
		templateUrl:'templates/login.html',
		controller: 'loginCTRL'
	})
	.state('register', {
		url: '/register',
		templateUrl:'templates/register.html',
		controller: 'registerCTRL'
	})

	.state('landing', {
		url: '/landing',
		templateUrl:'templates/landing.html',
		controller: 'landingCTRL'
	})

	.state('search', {
		url: '/search',
		templateUrl:'templates/search.html',
		controller: 'searchCTRL'
	})

	$urlRouterProvider.otherwise('/landing');

});
