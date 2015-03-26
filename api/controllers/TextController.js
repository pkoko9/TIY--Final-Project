
module.exports = {
	send: function(req, res) {
		console.log('Message sending...');

		var accountSid = 'ACf54a7994206452b04e115478943a282a';
		var authToken = "a92cdabae0c994a4f0a46b887d02a5e4";
		var client = require('twilio')(accountSid, authToken);

		if(!req.user) {
			res.jsonx({error: 'user not logged in'});
		}
		else { 
			client.messages.create({
			    body: "Please call 512-750-3721 for an immediate PRN work assignment",
			    to: req.body.textPhone,
			    from: "+15125803943"
			}, function(err, message) {
			    // process.stdout.write(message.sid);
			    if(message) {
			    	res.jsonx({error: 'Success'});
			    }
			    else if(err) {
			    	res.jsonx({error: 'Unsuccessful'});
			    	console.log(err);
			    }
			});
		}
	}
};