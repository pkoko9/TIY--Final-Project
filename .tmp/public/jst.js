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
__p += '<h1>Create Profile</h1>\n\n<div ng-controller="registerCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(registerInput)">\n\t\n\t\t<div>First Name</div>\n\t\t<input type="text" ng-model="registerInput.firstName" placeholder="Enter your First Name">\n\n\t\t<div>Last Name</div>\n\t\t<input type="text" ng-model="registerInput.lastName" placeholder="Enter your Last Name">\n\n\t\t<div>Email</div>\n\t\t\t<input type="text" ng-model="registerInput.email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" ng-model="registerInput.password" placeholder="Enter your password">\n\n\t\t<div>Phone</div>\n\t\t<input type="number" ng-model="registerInput.phone" placeholder="Enter your phone number">\n\n\t\t<div>Zip Code</div>\n\t\t<input type="number" ng-model="registerInput.zip" placeholder="Enter your 5 digit zip code">\n\n\t\t<div>Credentials</div>\n\t\t<input list="disciplines" ng-model="registerInput.credentials" placeholder="Select your certification">\n\t\t\t<datalist id="disciplines">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="COTA">\n\t\t\t  \t<option value="LVN">\n\t\t\t  \t<option value="OTR">\n\t\t\t  \t<option value="PT">\n\t\t\t  \t<option value="PTA">\n\t\t\t\t<option value="RN">\n\t\t\t\t<option value="SLP">\n\t\t\t</datalist> \n\n\t<div>Currently Active</div>\n\t\t<input list="availability" ng-model="registerInput.currentlyAvailable" placeholder="Are you currently available for work?">\n\t\t\t<datalist id="availability">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="Yes">\n\t\t\t\t<option value="No">\n\t\t\t</datalist>\n\n\t<div>Companies Registered With</div>\n\t\t\t<input type="textbox" ng-model="registerInput.registrations" placeholder="Please list the comapneis you are currently registered with separating each with a comma.">\n\n\t\t<button type="submit">Submit</button>\n\t</form>\n\n\t\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\n\t<div class=\'RegisterStatusMessages\'>\n\t\t<span ng-show = "registerSuccess">Congratulations!  You have successfully registered!</span>\n\t\t<span ng-repeat = "error in registerFailure">{{ error }}</span>\n\t</div>\n\t\n</div>\n\n<div ng-controller=\'cancelCTRL\'>\n\t<button type= \'button\' ng-click=\'cancel()\'>Cancel</button>\n</div>';

}
return __p
};

this["JST"]["assets/templates/search.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h1>Search Criteria</h1>\n\n<!-- \t<form id=\'form\'ng-submit="pullRecords()">\n\t\t\t\t\t\n\t\t<input type="checkbox" ng-class="errorType" ng-model="imageURL" placeholder=" Image URL">\n\t\t\t<span ng-bind="fail1"></span>\n\t\t\t\t\t\n\t\t\t<textarea type="text" ng-model="caption" placeholder="Image Caption"></textarea>\n\t\t\t\t<span ng-bind="fail2"></span>\t\t\t\t\t\n\t\t\t\t<br> -->\t\t\n<!-- Submit button click code -->\n<!-- \t\t\t<span class=\'buttons\'>\n\t\t\t\t<button id=\'cancel\' ng-click="cancelClick()" type="submit">CANCEL</button>\n\t\t\t\t<button id=\'add\' type=\'submit\' ng-click ="sendImage(imageURL, caption)"> <i class="ion-image"></i>ADD IMAGE</button>\n\t\t\t</span><br><br><br>\n\t</form> -->\n\n\t<h2>Below are the registered PRN Profiles currently available based on your search criteria:</h2>\n\n\t<form class = \'searchDisplay\' ng-submit="searchSubmit()">\t\n\t\t<div class =\'results\'>\n\t\t\t<ul ng-repeat="data in recoveredObject">\n\t\t\t\t<li id="firstName">First Name: {{ data.firstname }}</li>\n\t\t\t\t<li id="lastName">Last Name: {{ data.lastname }}</li>\n\t\t\t\t<li id="phone">Phone: {{ data.phone }}</li>\n\t\t\t\t<li id="zip">Zip Code: {{ data.zip }}</li>\n\t\t\t\t<li id="credentials">Credentials: {{ data.credentials }}</li>\n\t\t\t\t<li id="availability">Currently Available?: {{ data.currentlyAvailable }}</li>\n\t\t\t\t<li id="registrations">Companies registered with: {{ data.registrations }}</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\n\t\t<div>\n\t\t\t<button id=\'search\' type=\'submit\' ng-click ="sendData(filteredPRN)">Find PRNs</button>\n\t\t</div>\n\n\n<!-- ERIKAS HTML TIED TO GET REQUEST\n\n\t<form class="form" ng-submit="stateSubmit()">\n\t\t<div> -->\n\t\t<!-- Ideally, use ng-repeat to show the elections -->\n<!-- \t\t\t<div ng-repeat="state in states">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input type="checkbox" ng-model="governor.checked" ng-click="selection(index, options)">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ state.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div> -->\n\n\t\t\t<!-- <span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t\t<input type="checkbox" ng-model="state.governor" ng-click="selection()">\n\t\t\t\t</label>\n\t\t\t\tBob Roberts\n\t\t\t</span>\n\t\t\t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t\t<input type="checkbox" ng-model="state.governor" ng-click="selection()">\n\t\t\t\t</label>\n\t\t\t\tSheila Lui\n\t\t\t</span>\n\t\t\t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t\t<input type="checkbox" ng-model="state.governor" ng-click="selection()">\n\t\t\t\t</label>\n\t\t\t\tRogger Rice\n\t\t\t</span> -->\n<!-- \t\t</div>\n\n\t\t<div>\n\t\t\t<h3>For the race of</h3>\n\t\t\t<h3>STATE REPRESENTATIVE</h3>\n\t\t</div>\n\t\t<div>\n\t\t\t<div ng-repeat="state in states">\n\t\t\t\t<span class="item item-checkbox">\n\t\t\t\t\t<label class="checkbox">\n\t\t\t\t\t\t<input type="checkbox" ng-model="representative.checked" ng-click="selection($index, options)">\n\t\t\t\t\t</label>\n\t\t\t\t\t<span>{{ state.candidate }}</span>\n\t\t\t\t</span>\n\t\t\t</div> -->\n\t\t<!-- \t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox" ng-model="state.representative" ng-click="selection()">\n\t\t\t\t</label>\n\t\t\t\tAdam Blakely\n\t\t\t</span>\n\t\t\t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox" ng-model="state.representative" ng-click="selection()">\n\t\t\t\t</label>\n\t\t\t\tRyan Pike\n\t\t\t</span>\n\t\t\t<span class="item item-checkbox">\n\t\t\t\t<label class="checkbox">\n\t\t\t\t<input type="checkbox" ng-model="state.representative" ng-click="selection()">\n\t\t\t\t</label>\n\t\t\t\tSally Camp\n\t\t\t</span> -->\n<!-- \t\t</div>\n\t\t\t<br><br>\n\t\t<div>\n\t\t<button type="submit" value="submit">Submit</button>\n\t\t</div>\n\t</form>\n</div> -->\n\n';

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