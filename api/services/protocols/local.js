var validator = require('validator');

/**
 * Local Authentication Protocol
 *
 * The most widely used way for websites to authenticate users is via a username
 * and/or email as well as a password. This module provides functions both for
 * registering entirely new users, assigning passwords to already registered
 * users and validating login requesting.
 *
 * For more information on local authentication in Passport.js, check out:
 * http://passportjs.org/guide/username-password/
 */

/**
 * Register a new user
 *
 * This method creates a new user from a specified email, username and password
 * and assign the newly created user a local Passport.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.register = function (req, res, next) {
  var email    = req.param('email')
    , username = req.param('username')
    , password = req.param('password')
    , firstname = req.param('firstName')
    , lastname = req.param('lastName')
    , phone = req.param('phone')
    , zip = req.param('zip')
    , credentials = req.param('credentials')
    , active = req.param('currentlyAvailable')
    , registrations = req.param('registrations');

  if (!email) {
    req.flash('error', 'Error.Passport.Email.Missing');
    return next(new Error('No email was entered.'));
  }

  if (!username) {
    req.flash('error', 'Error.Passport.Username.Missing');
    return next(new Error('No username was entered.'));
  }

  if (!password) {
    req.flash('error', 'Error.Passport.Password.Missing');
    return next(new Error('No password was entered.'));
  }

  if (!firstname) {
    req.flash('error', 'Error.Passport.Firstname.Missing');
    return next(new Error('No firstname was entered.'));
  }

   if (!lastname) {
    req.flash('error', 'Error.Passport.Lastname.Missing');
    return next(new Error('No lastname was entered.'));
  }

   if (!phone) {
    req.flash('error', 'Error.Passport.Phone.Missing');
    return next(new Error('No phone number was entered.'));
  }

   if (!zip) {
    req.flash('error', 'Error.Passport.Zip.Missing');
    return next(new Error('No zip code was entered.'));
  }

   if (!credentials) {
    req.flash('error', 'Error.Passport.Credentails.Missing');
    return next(new Error('No credentials were entered.'));
  }

  if (!active) {
    req.flash('error', 'Error.Passport.Active.Missing');
    return next(new Error('Availability not entered.'));
  }

 
  User.create({
    username : username
  , email    : email
  , firstname : firstname 
  , lastname : lastname 
  , phone : phone
  , zip : zip
  , credentials : credentials
  , currentlyAvailable : active
  , registrations : registrations
  }, function (err, user) {
    if (err) {
      console.log(err);
      if (err.code === 'E_VALIDATION') {
        if (err.invalidAttributes.email) {
          req.flash('error', 'Error.Passport.Email.Exists');
        } else if(err.invalidAttributes.firstName) {
          req.flash('error', 'Error.Passport.FirstName.Invalid');
        } else if(err.invalidAttributes.lastName) {
          req.flash('error', 'Error.Passport.LastName.Invalid');
        } else if(err.invalidAttributes.phone) {
          req.flash('error', 'Error.Passport.Phone.Invalid');
        } else if(err.invalidAttributes.zip) {
          req.flash('error', 'Error.Passport.Zip.Invalid');
        } else if(err.invalidAttributes.credentials) {
          req.flash('error', 'Error.Passport.Credentials.Invalid');
        } else if(err.invalidAttributes.currentlyAvailable) {
          req.flash('error', 'Error.Passport.Active.Invalid');
        } else if(err.invalidAttributes.registrations) {
          req.flash('error', 'Error.Passport.Registrations.Invalid');
        } else {
          console.log(err);
          req.flash('error', 'Error.Passport.User.Exists');
        }
      }

      return next(err);
    }

    Passport.create({
      protocol : 'local'
    , password : password
    , user     : user.id
    }, function (err, passport) {
      if (err) {
        if (err.code === 'E_VALIDATION') {
          req.flash('error', 'Error.Passport.Password.Invalid');
        }

        return user.destroy(function (destroyErr) {
          next(destroyErr || err);
        });
      }

      next(null, user);
    });
  });
};

/**
 * Assign local Passport to user
 *
 * This function can be used to assign a local Passport to a user who doens't
 * have one already. This would be the case if the user registered using a
 * third-party service and therefore never set a password.
 *
 * @param {Object}   req
 * @param {Object}   res
 * @param {Function} next
 */
exports.connect = function (req, res, next) {
  var user     = req.user
    , password = req.param('password');

  Passport.findOne({
    protocol : 'local'
  , user     : user.id
  }, function (err, passport) {
    if (err) {
      return next(err);
    }

    if (!passport) {
      Passport.create({
        protocol : 'local'
      , password : password
      , user     : user.id
      }, function (err, passport) {
        next(err, user);
      });
    }
    else {
      next(null, user);
    }
  });
};

/**
 * Validate a login request
 *
 * Looks up a user using the supplied identifier (email or username) and then
 * attempts to find a local Passport associated with the user. If a Passport is
 * found, its password is checked against the password supplied in the form.
 *
 * @param {Object}   req
 * @param {string}   identifier
 * @param {string}   password
 * @param {Function} next
 */
exports.login = function (req, identifier, password, next) {
  var isEmail = validator.isEmail(identifier)
    , query   = {};

  if (isEmail) {
    query.email = identifier;
  }
  else {
    query.username = identifier;
  }

  User.findOne(query, function (err, user) {
    if (err) {
      return next(err);
    }

    if (!user) {
      if (isEmail) {
        req.flash('error', 'Error.Passport.Email.NotFound');
      } else {
        req.flash('error', 'Error.Passport.Username.NotFound');
      }

      return next(null, false);
    }

    Passport.findOne({
      protocol : 'local'
    , user     : user.id
    }, function (err, passport) {
      if (passport) {
        passport.validatePassword(password, function (err, res) {
          if (err) {
            return next(err);
          }

          if (!res) {
            req.flash('error', 'Error.Passport.Password.Wrong');
            return next(null, false);
          } else {
            return next(null, user);
          }
        });
      }
      else {
        req.flash('error', 'Error.Passport.Password.NotSet');
        return next(null, false);
      }
    });
  });
};
