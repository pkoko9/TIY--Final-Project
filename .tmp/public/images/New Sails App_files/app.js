angular.module('app', ['app.controllers', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	
	// .state('home', {
	// 	url: '/home',
	// 	templateUrl:'templates/home.html',
	// 	controller: 'homeCTRL'
	// })
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