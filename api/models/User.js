var User = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    username  : 	{ type: 'string', unique: true },
    email     : 	{ type: 'email',  unique: true },
    passports : 	{ collection: 'Passport', via: 'user'},
	firstname: 		{ type: 'string',  unique: false },
	lastname: 		{ type: 'string',  unique: false },
	phone: 			{ type: 'string',  unique: true },
	zip: 			{ type: 'string',  unique: false },
	credentials:    { type: 'string',  unique: false }, 
	currentlyAvailable: { type: 'string',  unique: false },
	registrations: 	{ type: 'text',  unique: false, required: false } 
  }
};

module.exports = User;
