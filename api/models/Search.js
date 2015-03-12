/**
* Search.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	userid: {type: 'integer', unique: true},
    firstName: {type: 'string', required: true},
  	lastName: {type: 'string', required: true},
  	email: {type: 'email', required: true, unique: true},
  	password: {type: 'string', required: true},
  	phone: {type: 'string', required: true},
  	zip: {type: 'string', required: true},
  	credentials: {type: 'string', required: true},
  	currentlyAvailable: {type: 'string', required: true},
  	registrations: {type: 'text', required: false}

  }
};

