
#TIY-Final-Project

##Description

As a large portion of our population cotinues to age, the demand for healthcare professionals is increasing.  In the absence of full time employee availability (due to last minute absences, planned time off, spikes in treatment demand, etc.), healthcare management companies often rely on contract or "PRN" (from Latin, Pro Re Nata or "as needed") employees to ensure patients are treated per their individual treatment plan schedule.  The process for securing PRN resources is often time consuming and cumbersome, as staffing managers allocate significant time coommunicating (usually via phone, email or text) with PRN employees to assess availability and willingness to fill coverage gaps.  Consequently, patient treatment is often delayed, resulting in a negative experience for the patient (i.e., a delay in necessary treatment) and the organization responsible for facilitating that treatment (operational ineffieciency, delayed billing opportunities.)     

We're taking a new approach to managing PRN staffing.  PRN Match will provide healthcare management companies (specifically, longterm care management organizations) with a web based repository of credentialed and company registered healthcare professionals searchable by location, credential type, availability and user rating.  Making this information easily and immediately availlable will reduce the inefficiencies associated with sourcing PRN employees in both planned and unplanned gap situations and allow patients to be treated per their defined treatment plan schedule.  


##User Stories##

Link to user stories on Trello here:  https://trello.com/prnfinder

##Wireframes##

Wireframe sketch can be viewed via the URL below.

https://cloud.githubusercontent.com/assets/10377924/6548238/4d3c0b18-c5c0-11e4-8d8c-86f9908c5182.jpg

##Models##

Below is a list of the two data models to be used with this project along with corresponding data types and dependencies.  The properties are unique to each model, therefire, there are no relationships between the models:

####PRN User Profiles####
*First_Name:  string, unique: false, required:  true

*Last_Name: string, unique: false, required:  true

*User_ID: integer, unique: true, required:  true

*Password: string, unique: true, required:  true

*Email:  string, unique: false, required:  true, validate on frot end via Angular

*Phone: integer, unique: true, required:  true

*Primary credentials: string, unique: false, required:  true

*Secondary credentials: string, unique: false, required:  false

*Zip Code: integer, unique: false, required:  true

*Active:  boolean, unique: false, required:  true

*Dates Available:  datetime, unique: false, required:  true

*Registered with: string, unique: false, required:  true

####Hiring User Profiles####
*First_Name:  string, unique: false, required:  true

*Last_Name: string, unique: false, required:  true

*User_ID: integer, unique: true, required:  true

*Password: string, unique: true, required:  true

*Email:  string, unique: false, required:  true, validate on frot end via Angular

*Phone: integer, unique: true, required:  true

*Zip Code: integer, unique: false, required:  true


##APIs, Plugins, Libraries and Frameworks##

This project will use the following tools:

*Angular for front end development

*Sails as the back-end server

*Underscore to facilitate filtering/sorting

*Bower will provide the framework for the project

##Contact##

Should you have questions, suggestions or comments about this project, please contact me via email or linked in below.  Thanks!

pkoko9@hotmail.com

www.linkedin.com/in/paulkoko/en

