angular.module('app.services', [])
// .factory('validateService', function() {
// 	return function(username, password) {
// 		var emailPass = false;
// 		var passPass = true;
// 		var loginObject = {
// 				loginTracker: {
// 					username: '',
// 					identifier: '',
// 					password: '',
// 					success: false
// 				},
// 				errorObject: {
// 					email: '',
// 					password: ''
// 				}
// 		};

// 		if(validator.isEmail(username)) {
// 			emailPass = true;
// 		} else {
// 			emailPass = false;
// 			loginObject.errorObject.email = 'Please enter a valid email.'
// 		}
// 		if(validator.isNull(password)) {
// 			passPass = false;
// 			loginObject.errorObject.password = 'Please enter a valid password.'
// 		} 
// 		else {
// 			passPass = true;
// 		}
// 		if(emailPass && passPass) {
// 			loginObject.loginTracker.username = username;
// 			loginObject.loginTracker.identifier = username;
// 			loginObject.loginTracker.password = password;
// 			loginObject.loginTracker.success = true;
// 		}

// 		return loginObject;
// 	};
// })
// .factory('objectLog', function() {
// 	return function(validated) {
// 		var noEmailError = false;
// 		var noPassError = false;
// 		var success = false;

// 		if(validated.errorObject.email.length === 0) {
// 			noEmailError = true;
// 		}
// 		if(validated.errorObject.password.length === 0) {
// 			noPassError = true;
// 		}
// 		if(noEmailError && noPassError) {
// 			console.log(validated.loginTracker);
// 			success = true;
// 		}
// 	}
// })
// .factory('errorMessageSort', function() {
// 	return function(messageToFilter) {

// 		switch (messageToFilter) {
// 		    case "Error.Passport.Password.Invalid":
// 		        messageToFilter = "The provided password is invalid!";
// 		        break;
// 		    case "Error.Passport.Password.Wrong":
// 		        messageToFilter = "Whoa, that password wasn't quite right!";
// 		        break;
// 		    case "Error.Passport.Password.NotSet":
// 		        messageToFilter = "Oh no, you haven't set a password yet!";
// 		        break;
// 		    case "Error.Passport.Username.NotFound":
// 		        messageToFilter = "Uhm, what's your name again?";
// 		        break;
// 		    case "Error.Passport.User.Exists":
// 		       messageToFilter = "This username is already taken.";
// 		       break;
// 		    case "Error.Passport.Email.NotFound":
// 		        messageToFilter = "That email doesn't seem right";
// 		        break;
// 		    case "Error.Passport.Email.Missing":
// 		        messageToFilter = "You need to supply an email-address for verification";
// 		        break;
// 		    case "Error.Passport.Email.Exists":
// 		        messageToFilter = "This email already exists. So try logging in.";
// 		        break;
// 		    case "Error.Passport.Username.Missing":
// 		        messageToFilter = "You need to supply a username";
// 		        break;
// 		    case "Error.Passport.Password.Missing":
// 		        messageToFilter = "Oh no, you haven't set a password yet!";
// 		        break;
// 		    case "Error.Passport.Generic":
// 		        messageToFilter = "Snap. Something went wrong with authorization.";
// 		        break;
// 		    default:
// 		        console.log('default');
// 		}
// 		return messageToFilter;
// 	};
// })
// .factory('verify', function() {
// 	return function(credentials) {
// 		var assignmentObject = {
// 			name: '',
// 			dueAt: null, 
// 			url: '', 
// 			nameError: '',
// 			dueError: '',
// 			urlError: '',
// 			valid: false
// 		};

// 		if(validator.isNull(credentials.name) || credentials.name.length === 0) {
// 			assignmentObject.nameError = 'Assignment name is not valid';
// 		} else {
// 			assignmentObject.name = credentials.name;
// 		}
// 		if(!validator.isDate(credentials.dueAt)) {
// 			assignmentObject.dueError = 'Date is incorrect';
// 		} else {
// 			assignmentObject.dueAt = credentials.dueAt;
// 		}
// 		if(!validator.isURL(credentials.url)) {
// 			assignmentObject.urlError = 'Enter a valid URL';
// 		} else {
// 			assignmentObject.url = credentials.url;
// 		}
// 		if(assignmentObject.nameError.length === 0 && 
// 			assignmentObject.dueError.length === 0 && 
// 			assignmentObject.urlError.length === 0) {
// 			assignmentObject.valid = true;
// 		}
// 		return assignmentObject;
// 	};