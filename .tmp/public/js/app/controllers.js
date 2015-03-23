angular.module('app.controllers', ['app.services'])

.controller('homeCTRL', function($scope, $stateParams){
	$scope.message = $stateParams.success;
})

.controller('landingCTRL', function($scope, $state){

})

.controller('searchCTRL', function($scope, $http, $state){
	
	$scope.allUsers = [];
		
	$scope.searchSubmit = function() {
	
		$http.get('/user?registrations=' + $scope.registrations)
			.success(function(res){
				// console.log(res);
				$scope.allUsers = (res);
				$scope.filters = true;
				$scope.tableRender = true;
				$scope.searchButton = true;
				$scope.filterBy1 = '!!';
				$scope.filterBy2 = '!!';

			})

	}

})

.controller('loginCTRL', function($scope, $http, $state){

	var correctEmail = false;
	var correctPW = false;
	var loginInput = {};
	$scope.emailFail = false;
	$scope.pwFail = false;
	$scope.loginSuccess = false;
	$scope.loginFailure = [];
	$scope.registerSuccess = false;
	$scope.registerFailure = [];
	$scope.test = false;
	$scope.navRegister = false;

	$scope.login = function(email, password) {
		var input1 = validator.isEmail(email);

		if (input1) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
			$scope.emailFail = true;
			// correctEmail = false;
		}

		var input2 = validator.isNull(password);

		if (input2) {
			$scope.pwFail = true;
			// correctPW = true;
		}
		else {
			$scope.pwFail = false;
			correctPW= true;
		}

		if(correctEmail && correctPW) {
			loginInput = {
				identifier: email,
				password: password
			};

			$http.post('/auth/local', loginInput)
			.success(function(res){
				// console.log(res);
				if(res) {
					$state.go('landing');
					console.log('successful login!')

				}
				else {
					$scope.loginFailure = res.errors;
					console.log (err);
					console.log($scope.loginFailure);
				}
			});

			$scope.email='';
			$scope.password='';

		}
		console.log(loginInput);
	};

})

.controller('registerCTRL', function($scope, $http, $state){

	var correctEmail = false;
	var correctPW = false;
	$scope.registerInput = {				
		firstName: '', 
		lastName: '', 
		username: '', 
		email: '', 
		password: '', 
		phone: '', 
		zip: '', 
		credentials: '', 
		currentlyAvailable: '', 
		registrations: '' 
	};
	$scope.emailFail = false;
	$scope.pwFail = false;

	$scope.login = function(registerInput) {
		console.log('login');

		var input1 = validator.isEmail(registerInput.email);

		if (input1) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
			$scope.emailFail = true;
			// correctEmail = false;
		}

		var input2 = !validator.isNull(registerInput.password);

		if (input2) {
			// $scope.pwFail = false;
			correctPW = true;
		}
		else {
			$scope.pwFail = true;
			// correctPW= false;
		}

		if(correctEmail && correctPW) {

			registerInput.username = registerInput.email;
			$http.post('/auth/local/register', registerInput)
			.success(function(res){
				console.log('successful registration!');
				console.log(res);
				
				$state.go('landing');
				$scope.registerSuccess = true;
			});

			$scope.email='';
			$scope.password='';
		}
		console.log(registerInput);
	};
	
})

.controller('cancelCTRL', function($scope, $state){
	$scope.cancel = function () {
		$scope.email='';
		$scope.password='';
		$state.go('landing');
	}

})

.controller('NavCtrl', function($scope, $http, $state, $rootScope){
	
	$scope.logOut = function () {
		// console.log ('test logout click');
		$http.post('/logout')
		.success(function(response) {
			if (response.success)
				$state.go('landing')
				console.log('Successful logout!')
		})
	}
	$scope.loginRoute = function() {
		$state.go('login');
	}
	$scope.createProfileRoute = function() {
		$state.go('register');
	}
});
