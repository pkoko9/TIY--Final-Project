this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/landing.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '\n<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">\n  <!-- Indicators -->\n  <ol class="carousel-indicators">\n    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>\n    <li data-target="#carousel-example-generic" data-slide-to="1"></li>\n    <li data-target="#carousel-example-generic" data-slide-to="2"></li>\n  </ol>\n\n  <!-- Wrapper for slides -->\n  <div class="carousel-inner" role="listbox">\n    <div class="item active">\n      <img src="/images/nurse-baby1.jpg" alt="...">\n      <div class="carousel-caption">\n        ...\n      </div>\n    </div>\n    <div class="item">\n      <img src="/images/staff.jpg" alt="...">\n      <div class="carousel-caption">\n        ...\n      </div>\n    </div>\n    <div class="item">\n      <img src="/images/pt.jpg" alt="...">\n      <div class="carousel-caption">\n        ...\n      </div>\n    </div>\n<!--      <div class="item">\n      <img src="/images/elderly-man-2.png" alt="...">\n      <div class="carousel-caption">\n        ...\n      </div> -->\n<!--     </div> -->\n    ...\n  </div>\n\n  <!-- Controls -->\n  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">\n    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>\n    <span class="sr-only">Previous</span>\n  </a>\n  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">\n    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>\n    <span class="sr-only">Next</span>\n  </a>\n</div>\n\n\n\n\n\t<div>\n<!-- \t\t<div class="banner" >\n\t\t\t<img src = "/images/">\n\t \t</div> -->\n\t</div>\n\n\n\t\t<div class="about" >ABOUT</div>\n\t\t\t<span>PRN Staffing Solutions was developed to As a large portion of our population cotinues to age, the demand for healthcare professionals is increasing. In the absence of full time employee availability (due to last minute absences, planned time off, spikes in treatment demand, etc.), healthcare management companies often rely on contract or "PRN" (from Latin, Pro Re Nata or "as needed") employees to ensure patients are treated per their individual treatment plan schedule. The process for securing PRN resources is often time consuming and cumbersome, as staffing managers allocate significant time coommunicating (usually via phone, email or text) with PRN employees to assess availability and willingness to fill coverage gaps. Consequently, patient treatment is often delayed, resulting in a negative experience for the patient (i.e., a delay in necessary treatment) and the organization responsible for facilitating that treatment (operational ineffieciency, delayed billing opportunities.)\n\n\t\t\tWe\'re taking a new approach to managing PRN staffing. PRN Match will provide healthcare management companies (specifically, longterm care management organizations) with a web based repository of credentialed and company registered healthcare professionals searchable by location, credential type, availability and user rating. Making this information easily and immediately availlable will reduce the inefficiencies associated with sourcing PRN employees in both planned and unplanned gap situations and allow patients to be treated per their defined treatment plan schedule.</span>\n\n\t\t\t<span>Instructions for PRNs:</span>\n\n\t\t\t<span>Instructions for those hiring PRNs:</span>\n\t</div>\n\n<!-- \t<div class="footer">\n\t\tPRN Staffing Solutions - all rights reserved.\n\t</div> -->\n\n';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class = "login-header">Login</div>\n\n<div ng-controller="loginCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(email, password)">\n\t\n\t\t<div>Email</div>\n\t\t\t<input type="text" class="form-control" ng-model="email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" class="form-control" ng-model="password" placeholder="Enter your password"><br>\n\n\t\n\t\t<button type="submit" class="btn btn-success btn-default">Submit</button>\n\t\t<button type= \'button\' class="btn btn-info btn-default" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\n\t</form>\n\n\t<div class=\'failMessages\'>\n\t\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\t</div>\n\n\t<div class=\'logInSuccessMessage\'>\n\t\t<span ng-show = "loginSuccess">Congratulations!  You have successfully logged in!</span>\n\t\t<span ng-repeat = "error in loginFailure">{{ error }}</span>\n\n</div>\n\n\t';

}
return __p
};

this["JST"]["assets/templates/register.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="register-header">Create Profile</div>\n\n<div ng-controller="registerCTRL">\n\t\n\t<form class=\'form\'  ng-submit="login(registerInput)">\n\t\n\t\t<div>First Name</div>\n\t\t<input type="text" class="form-control" ng-model="registerInput.firstName" placeholder="Enter your First Name">\n\n\t\t<div>Last Name</div>\n\t\t<input type="text" class="form-control" ng-model="registerInput.lastName" placeholder="Enter your Last Name">\n\n\t\t<div>Email</div>\n\t\t\t<input type="text" class="form-control" ng-model="registerInput.email" placeholder="pk23@gmail.com">\n\t\n\t\t<div>Password</div>\n\t\t\t<input type="password" class="form-control" ng-model="registerInput.password" placeholder="Enter your password">\n\n\t\t<div>Phone</div>\n\t\t<input type="number" class="form-control" ng-model="registerInput.phone" placeholder="Enter your phone number">\n\n\t\t<div>Zip Code</div>\n\t\t<input type="number" class="form-control" ng-model="registerInput.zip" placeholder="Enter your 5 digit zip code">\n\n\t\t<div>Credentials</div>\n\t\t<input list="disciplines" class="form-control" ng-model="registerInput.credentials" placeholder="Select your certification">\n\t\t\t<datalist id="disciplines">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="COTA">\n\t\t\t  \t<option value="LVN">\n\t\t\t  \t<option value="OTR">\n\t\t\t  \t<option value="PT">\n\t\t\t  \t<option value="PTA">\n\t\t\t\t<option value="RN">\n\t\t\t\t<option value="SLP">\n\t\t\t</datalist> \n\n\t<div>Currently Active</div>\n\t\t<input list="availability" class="form-control" ng-model="registerInput.currentlyAvailable" placeholder="Are you currently available for work?">\n\t\t\t<datalist id="availability">\n\t\t\t\t<option value="Not Applicable">\n\t\t\t\t<option value="Yes">\n\t\t\t\t<option value="No">\n\t\t\t</datalist>\n\n\t<div class="registered-with">Companies Registered With</div>\n\t\t\t<input type="textbox" class="form-control" ng-model="registerInput.registrations" placeholder="Please list the companies you are currently registered with separating each with a comma. (i.e., RehabWorks, Harden Healthcare, etc."><br>\n\n\t\t<button type="submit" class="btn btn-success btn-default">Submit</button>\n\t\t<button type="submit" class="btn btn-warning btn-default">Edit Profile</button>\n\t\t<button type= \'button\' class="btn btn-info btn-default" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\t</form>\n\n\t<div class = "error-messages">\n\t\t<span ng-show = "pwFail">Please enter a password</span><br>\n\t\t<span ng-show = "emailFail">Please enter a valid email address</span>\n\t</div>\n\n\t<div class=\'RegisterStatusMessages\'>\n\t\t<span ng-show = "registerSuccess">Congratulations!  You have successfully registered!</span>\n\t\t<span ng-repeat = "error in registerFailure">{{ error }}</span>\n\t</div>\n\t\n</div>\n\n<div ng-controller=\'cancelCTRL\'>\n\t\n</div>';

}
return __p
};

this["JST"]["assets/templates/search.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="search-header">Search Criteria<br>\n\t<span>In the field below, please enter the name of the company in need of PRN support.  Press the "Find PRNs" button to display your search results.</span>\n</div><br>\n \n\n    <form class=\'search-criteria\'>\n\t   Hiring company name<input type="text" class = "form-control" ng-model = "registrations" id="companySelect" placeholder="Enter hiring company">\n\n       <h3 class="filter-header">Filters</h3>\n\n        \n        <input id=\'filterByFirst\' class = "form control" type=\'text\' placeholder=\'Filter by First Name\' ng-model=\'filterBy1\'>\n\n       \n        <input id=\'filterByLast\' class = "form control" type=\'text\' placeholder=\'Filter by Last Name\' ng-model=\'filterBy2\'>\n\n        \n        <input id=\'filterByCreds\' class = "form control" type=\'text\' placeholder=\'Filter by Certification\' ng-model=\'filterBy3\'><br>\n\n        <br><button type=\'button\' ng-click = "searchSubmit()" class="btn btn-success btn-default">Find PRNs</button>\n        <button type= \'button\' class="btn btn-info btn-default" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\t   <br>\n    </form>\n\t\n        <div id=\'searchTable\'>\n            <table class="table table-border table-hover table-condensed table-responsive">\n            \n                <tr>\n                    <th class=\'firstName\'>First Name</th>\n                    <th class=\'lastName\'>LastName</th>\n                    <th class=\'phone\'>Phone</th>\n                    <th class=\'zip\'>Zip Code</th>\n                    <th class=\'credentials\' ng-click=\'onNameClick()\'>Certification</th>\n                    <th class=\'availability\' ng-click=\'onNameClick()\'>Currently Available</th>\n                    <th class=\'registrations\'>Company Registrations</th>\n                </tr>\n\t\t\t\t\t\n<!-- \t\t\t\t<div class=\'submitButton\'>\n\t\t\t\t\t<button type=\'button\' ng-click = "searchSubmit()" class="btn btn-success btn-lg">Find PRNs</button>\n\t\t\t\t\t<button type= \'button\' class="btn btn-info btn-lg" ng-controller=\'cancelCTRL\' ng-click=\'cancel()\'>Cancel</button>\n\t\t\t\t</div><br> -->\n\n                <tr id=\'searchTable\' ng-repeat=\'data in recoveredObject\'>\n                    <td> {{ data.firstname }}</td>\n                    <td> {{ data.lastname }}</td>\n                    <td> {{ data.phone }}</td>\n                    <td> {{ data.zip }}</td>\n                    <td> {{ data.credentials }}</td>\n                    <td> {{ data.currentlyAvailable }}</td>\n                    <td> {{ data.registrations }}</td>  \n                </tr>\n\n            </table>\n        </div>\n\n\n\n\n\n\n';

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