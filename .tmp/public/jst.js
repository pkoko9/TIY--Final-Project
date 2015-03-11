this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Home</h1>\n\n\t<div ng-controller = \'homeCTRL\'>\n\t\t<button type = \'button\' ng-click = \'search()\'>PRN Search</button>\n\t\t<button type = \'button\' ng-click = \'editProfile()\'>Edit Profile</button>\n\t</div>';

}
return __p
};

this["JST"]["assets/templates/landing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>About</h1>\n\t<p>Add some content that describes the site and it\'s purpose.</p>\n\n\t<div ng-controller = \'landingCTRL\'>\n\t\t<button type = \'button\' ng-click = \'loginRoute()\'>Log In</button>\n\t\t<button type = \'button\' ng-click = \'createProfileRoute()\'>Create Profile</button>\n\t</div>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>LogIn</h1>\n\n<div ng-controller="loginCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(email, password)">\n\t\n\t\t<div>Email</div>\n\t\t\t<input type="text" ng-model="email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" ng-model="password" placeholder="Enter your password">\n\n\t\n\t\t<button type="submit">Submit</button>\n\n\t</form>\n\n\t<div class=\'failMessages\'>\n\t\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\t</div>\n\n\t<div class=\'logInSuccessMessage\'>\n\t\t<span ng-show = "loginSuccess">Congratulations!  You have successfully logged in!</span>\n\t\t<span ng-repeat = "error in loginFailure">{{ error }}</span>\n\n</div>\n\n<div ng-controller=\'cancelCTRL\'>\n\t<button type= \'button\' ng-click=\'cancel()\'>Cancel</button>\n</div>\n\t';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Create Profile</h1>\n\n<div ng-controller="registerCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(registerInput)">\n\t\n\t\t<div>First Name</div>\n\t\t<input type="text" ng-model="registerInput.firstName" placeholder="Enter your First Name">\n\n\t\t<div>Last Name</div>\n\t\t<input type="text" ng-model="registerInput.lastName" placeholder="Enter your Last Name">\n\n\t\t<div>Email</div>\n\t\t\t<input type="text" ng-model="registerInput.email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" ng-model="registerInput.password" placeholder="Enter your password">\n\n\t\t<div>Phone</div>\n\t\t<input type="number" ng-model="registerInput.phone" placeholder="Enter your phone number">\n\n\t\t<div>Zip Code</div>\n\t\t<input type="number" ng-model="registerInput.zip" placeholder="Enter your 5 digit zip code">\n\n\t\t<div>Credentials</div>\n\t\t<input list="disciplines" ng-model="registerInput.credentials" placeholder="Select your certification">\n\t\t\t<datalist id="disciplines">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="COTA">\n\t\t\t  \t<option value="LVN">\n\t\t\t  \t<option value="OTR">\n\t\t\t  \t<option value="PT">\n\t\t\t  \t<option value="PTA">\n\t\t\t\t<option value="RN">\n\t\t\t\t<option value="SLP">\n\t\t\t</datalist> \n\n\t<div>Curently Active</div>\n\t\t<input list="availability" ng-model="registerInput.currentlyAvailable" placeholder="Are you currently available for work?">\n\t\t\t<datalist id="availability">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="Yes">\n\t\t\t\t<option value="No">\n\t\t\t</datalist>\n\n\t<div>Companies Registered With</div>\n\t\t\t<input type="textbox" ng-model="registerInput.registrations" placeholder="Please list the comapneis you are currently registered with separating each with a comma.">\n\n\t\t<button type="submit">Submit</button>\n\t</form>\n\n\t\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\n\t<div class=\'RegisterStatusMessages\'>\n\t\t<span ng-show = "registerSuccess">Congratulations!  You have successfully registered!</span>\n\t\t<span ng-repeat = "error in registerFailure">{{ error }}</span>\n\t</div>\n\t\n</div>\n\n<div ng-controller=\'cancelCTRL\'>\n\t<button type= \'button\' ng-click=\'cancel()\'>Cancel</button>\n</div>';

}
return __p
};

this["JST"]["assets/templates/search.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Search Criteria</h1>';

}
return __p
};

this["JST"]["assets/templates/searchresults.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Search Results</h1>';

}
return __p
};