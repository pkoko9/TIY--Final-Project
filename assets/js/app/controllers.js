angular.module('app.controllers', ['app.services'])

.controller('homeCTRL', function($scope, $stateParams){
	$scope.message = $stateParams.success;
})

.controller('landingCTRL', function($scope, $state){
	$scope.loginRoute = function() {
		$state.go('login');
	}

	$scope.createProfileRoute = function() {
		$state.go('register');
	}

})

.controller('searchCTRL', function($scope){

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
	// $scope.myHome=true;
	// $scope.myLogout=true;


	$scope.login = function(email, password) {
		var input1 = validator.isEmail(email);
		// console.log (input1);
		if (input1) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
				$scope.emailFail = true;
				// correctEmail = false;
		}

		var input2 = validator.isNull(password);
		// console.log (input2);
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
				// console.log('success!');
				// console.log(res.errors);
			if(res.success) {
					$scope.loginSuccess=true;
					$state.go('home');
				}
				else {
					$scope.loginFailure = res.errors;
				}
			});

			$scope.email='';
			$scope.password='';
			// $scope.myHome=false;
			// $scope.myLogout=false;
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
	// $scope.myHome=false;
	// $scope.myLogout=false;


	$scope.login = function(registerInput) {
		console.log('login');

		var input1 = validator.isEmail(registerInput.email);
		// console.log (input1);
		if (input1) {
			correctEmail = true;
			// $scope.emailFail = false;
		} else {
				$scope.emailFail = true;
				// correctEmail = false;
		}

		var input2 = !validator.isNull(registerInput.password);
		// console.log (input2);
		if (input2) {
			// $scope.pwFail = false;
			correctPW = true;
		}
			else {
				$scope.pwFail = true;
				// correctPW= false;
			}

		if(correctEmail && correctPW) {
			// $scope.registerInput = {
			// 	// firstname: registerInput.firstName,
			// 	// lastname: registerInput.lastName,
			// 	// username: registerInput.email,
			// 	// email: registerInput.email,
			// 	// password: registerInput.password
			// 	// phone: registerInput.phone,
			// 	// zip: registerInput.zip,
			// 	// credentials: registerInput.credentials,
			// 	// active: registerInput.currentlyAvailable,
			// 	// registrations: registerInput.registrations
			// };
			registerInput.username = registerInput.email;
			$http.post('/auth/local/register', registerInput)
			.success(function(res){
				console.log('success!');
				console.log(res);
				if(res.success) {
					$state.go('home');
					$scope.registerSuccess=true;
				}
				else {
					$scope.registerFailure = res.errors;
				}
				$scope.registerSuccess = true;
				// $scope.myLogout = false;
				// $scope.myHome = false;

			})

		$scope.email='';
		$scope.password='';
		}
		console.log(registerInput);
	};
	
})

.controller('cancelCTRL', function($scope, $state){
	$scope.cancel = function () {
		// console.log ('test cancel click');
		$scope.email='';
		$scope.password='';
		$state.go('landing');
	}

})

.controller('NavCtrl', function($scope, $http, $state){
	$scope.logOut = function () {
		// console.log ('test logout click');
		$http.post('/logout')
		.success(function(response) {
		if (response.success)
			$state.go('landing');
		})
	}
})


