this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/landing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n\t<div class= "home-text">\n\t\t<div class="about" >ABOUT</div>\n\t\t\t<span>PRN Staffing Solutions was developed to As a large portion of our population cotinues to age, the demand for healthcare professionals is increasing. In the absence of full time employee availability (due to last minute absences, planned time off, spikes in treatment demand, etc.), healthcare management companies often rely on contract or "PRN" (from Latin, Pro Re Nata or "as needed") employees to ensure patients are treated per their individual treatment plan schedule. The process for securing PRN resources is often time consuming and cumbersome, as staffing managers allocate significant time coommunicating (usually via phone, email or text) with PRN employees to assess availability and willingness to fill coverage gaps. Consequently, patient treatment is often delayed, resulting in a negative experience for the patient (i.e., a delay in necessary treatment) and the organization responsible for facilitating that treatment (operational ineffieciency, delayed billing opportunities.)\n\n\t\t\tWe\'re taking a new approach to managing PRN staffing. PRN Match will provide healthcare management companies (specifically, longterm care management organizations) with a web based repository of credentialed and company registered healthcare professionals searchable by location, credential type, availability and user rating. Making this information easily and immediately availlable will reduce the inefficiencies associated with sourcing PRN employees in both planned and unplanned gap situations and allow patients to be treated per their defined treatment plan schedule.</span>\n\n\t\t\t<span>Instructions for PRNs:</span>\n\n\t\t\t<span>Instructions for those hiring PRNs:</span>\n\t</div>\n<!-- \t<div class="footer">\n\t\tPRN Staffing Solutions - all rights reserved.\n\t</div> -->\n\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class = "login-header">Login</div>\n\n<div ng-controller="loginCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(email, password)">\n\t\n\t\t<div>Email</div>\n\t\t\t<input type="text" class="form-control input-lg" ng-model="email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" class="form-control input-lg" ng-model="password" placeholder="Enter your password"><br>\n\n\t\n\t\t<button type="submit" class="btn btn-success btn-lg">Submit</button>\n\t\t<button type= \'button\' class="btn btn-info btn-lg" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\n\t</form>\n\n\t<div class=\'failMessages\'>\n\t\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\t</div>\n\n\t<div class=\'logInSuccessMessage\'>\n\t\t<span ng-show = "loginSuccess">Congratulations!  You have successfully logged in!</span>\n\t\t<span ng-repeat = "error in loginFailure">{{ error }}</span>\n\n</div>\n\n\t';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="register-header">Create Profile</div>\n\n<div ng-controller="registerCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(registerInput)">\n\t\n\t\t<div>First Name</div>\n\t\t<input type="text" class="form-control input-lg" ng-model="registerInput.firstName" placeholder="Enter your First Name">\n\n\t\t<div>Last Name</div>\n\t\t<input type="text" class="form-control input-lg" ng-model="registerInput.lastName" placeholder="Enter your Last Name">\n\n\t\t<div>Email</div>\n\t\t\t<input type="text" class="form-control input-lg" ng-model="registerInput.email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" class="form-control input-lg" ng-model="registerInput.password" placeholder="Enter your password">\n\n\t\t<div>Phone</div>\n\t\t<input type="number" class="form-control input-lg" ng-model="registerInput.phone" placeholder="Enter your phone number">\n\n\t\t<div>Zip Code</div>\n\t\t<input type="number" class="form-control input-lg" ng-model="registerInput.zip" placeholder="Enter your 5 digit zip code">\n\n\t\t<div>Credentials</div>\n\t\t<input list="disciplines" class="form-control input-lg" ng-model="registerInput.credentials" placeholder="Select your certification">\n\t\t\t<datalist id="disciplines">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="COTA">\n\t\t\t  \t<option value="LVN">\n\t\t\t  \t<option value="OTR">\n\t\t\t  \t<option value="PT">\n\t\t\t  \t<option value="PTA">\n\t\t\t\t<option value="RN">\n\t\t\t\t<option value="SLP">\n\t\t\t</datalist> \n\n\t<div>Currently Active</div>\n\t\t<input list="availability" class="form-control input-lg" ng-model="registerInput.currentlyAvailable" placeholder="Are you currently available for work?">\n\t\t\t<datalist id="availability">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="Yes">\n\t\t\t\t<option value="No">\n\t\t\t</datalist>\n\n\t<div class="registered-with">Companies Registered With</div>\n\t\t\t<input type="textbox" class="form-control input-lg" ng-model="registerInput.registrations" placeholder="Please list the companies you are currently registered with separating each with a comma. (i.e., RehabWorks, Harden Healthcare, etc."><br>\n\n\t\t<button type="submit" class="btn btn-success btn-lg">Submit</button>\n\t\t<button type="submit" class="btn btn-warning btn-lg">Edit Profile</button>\n\t\t<button type= \'button\' class="btn btn-info btn-lg" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\t</form>\n\n\t\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\n\t<div class=\'RegisterStatusMessages\'>\n\t\t<span ng-show = "registerSuccess">Congratulations!  You have successfully registered!</span>\n\t\t<span ng-repeat = "error in registerFailure">{{ error }}</span>\n\t</div>\n\t\n</div>\n\n<div ng-controller=\'cancelCTRL\'>\n\t\n</div>';

}
return __p
};

this["JST"]["assets/templates/search.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="search-header">Search Criteria<br>\n\t<span>Please enter a hiring company to filter PRNs eligible to work for that company, and select the criteria below you wish to search by.  Press the "Find PRNs" button to display your search results.</span>\n</div><br>\n\n<!-- <div id="filters">\n    <input type="checkbox" checked="checked" value="firstname" id="filter-firstname">First Name\n\t<input type="checkbox" checked="checked" value="lastname" id="filter-lastname">Last Name\n    <input type="checkbox" checked="checked" value="credentials" id="filter-credentials">Credentials\n    <input type="checkbox" checked="checked" value="currentlyAvailable" id="filter-currentlyAvailable">Currently Available\n    <input type="checkbox" checked="checked" value="zipcode" id="filter-zipcode">Zip Code\n    <input type="text" placeholder="Enter hiring company Name" id="filter-companyRegistrations">Companies Registered With \n <!   <input type="checkbox" checked="checked" value="zipcode" id="filter-zipcode"><label for="filter-zipcode">Availability</label> -->\n<!-- </div> -->\n\n<div class=\'search-criteria\'>\n\t<label class="form-inline">Hiring company name:\n\t  <input type="text" id="companySelect" placeholder="Enter hiring company">\n\t</label><br><br>\n\t<label class="checkbox-inline">\n\t  <input type="checkbox" id="inlineCheckbox1" value="firstname"> First Name\n\t</label>\n\t<label class="checkbox-inline">\n\t  <input type="checkbox" id="inlineCheckbox2" value="lastname"> Last Name\n\t</label>\n\t<label class="checkbox-inline">\n\t  <input type="checkbox" id="inlineCheckbox3" value="credentials"> Credentials\n\t</label>\n\t<label class="checkbox-inline">\n\t  <input type="checkbox" id="inlineCheckbox4" value="currentlyAvailable"> Current Availability\n\t</label>\n<!-- \t<label class="checkbox-inline">\n\t  <input type="checkbox" id="inlineCheckbox5" value="zip code"> Zip Code\n\t</label> -->\n</div>\n\n\t<form class = \'searchDisplay\' ng-submit="searchSubmit()">\t\n\t\t<div class =\'results\'>\n\t\t\t<ul ng-repeat="data in recoveredObject">\n\t\t\t\t<li id="firstName">First Name: {{ data.firstname }}</li>\n\t\t\t\t<li id="lastName">Last Name: {{ data.lastname }}</li>\n\t\t\t\t<li id="phone">Phone: {{ data.phone }}</li>\n\t\t\t\t<li id="zip">Zip Code: {{ data.zip }}</li>\n\t\t\t\t<li id="credentials">Credentials: {{ data.credentials }}</li>\n\t\t\t\t<li id="availability">Currently Available?: {{ data.currentlyAvailable }}</li>\n\t\t\t\t<li id="registrations">Companies registered with: {{ data.registrations }}</li>\n\t\t\t</ul>\n\t\t</div><br>\n\n\t\t<div class=\'submitButton\'>\n\t\t\t<button type=\'submit\' class="btn btn-success btn-lg" ng-click ="sendData(filteredPRN)">Find PRNs</button>\n\t\t\t<button type= \'button\' class="btn btn-info btn-lg" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\t\t</div>\n\t</form>\n\t\t\n<!-- \t<div>\n\t\t<button type=\'submit\' class="btn btn-success btn-lg"ng-click ="sendData(filteredPRN)">Find PRNs</button>\n\t\t<button type= \'button\' class="btn btn-info btn-lg" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\t</div> -->\n\n\n\n\n\n';

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