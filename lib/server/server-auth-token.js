Meteor.startup(function() {
  SERVER_AUTH_TOKEN = Random.secret();
});
