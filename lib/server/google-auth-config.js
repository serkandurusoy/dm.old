ServiceConfiguration.configurations.upsert(
  {service: 'google'},
  {
    $set: {
      clientId: 'xxxxx',
      secret: 'xxxxx'
    }
  }
);

var checkEmailAgainstAllowed = function(email) {
  var allowedDomains = ['dragoman-turkey.com'];
  var allowedEmails = ['serkan.durusoy@dna-tr.com','oakmankas@gmail.com','ohalacoglu@gmail.com','ozz.tuba@gmail.com','kguvencduman@gmail.com'];
  var domain = email.replace(/.*@/,'').toLowerCase();
  email = email.toLowerCase();
  return _.contains(allowedEmails, email) || _.contains(allowedDomains, domain);
};

Accounts.config({
  loginExpirationInDays: 1,
  // TODO: Check that this actually works!
  restrictCreationByEmailDomain: function(email) {
    if (!email) {
      throw new Meteor.Error(403,'Giriş yapmak içi kayıtlı bir eposta adresi gerekli');
    }
    if (!checkEmailAgainstAllowed(email)) {
      throw new Meteor.Error(403,'Giriş yapmak için şirket hesabı gerekli');
    }
    return true;
  }
  }
);

Accounts.onCreateUser(function(options,user){
  user.services.google.email = user.services.google.email.toLowerCase();
  _.extend(user, {
    name: user.services.google.given_name,
    lastName: user.services.google.family_name,
    email: user.services.google.email,
    avatar: user.services.google.picture
  });
  // TODO: this is not very secure, check profile objects first and just pick the name
  delete user.profile;

  // Hack to create user id so that we can initialize is counts.
  user._id = Meteor.users._makeNewID();
  IsCounts.insert({
    user: user._id,
    islerim: 0,
    ilgilendigimIsler: 0,
    verdigimIsler: 0
  });

  return user;
});

// Publish this universally, we don't have to subscribe, it is always published
Meteor.publish(null, function() {
  this.unblock();
  if (this.userId) {
    return Meteor.users.find(
      {}, {fields: {
        _id:1,
        name: 1,
        lastName: 1,
        email: 1,
        avatar: 1
      }});
  } else {
    this.ready();
  }
});

// Deny any client updates to the users collection, also deny updates to profile
Meteor.users.permit('insert').never().apply();
Meteor.users.permit('update').never().apply();
Meteor.users.permit('remove').never().apply();
