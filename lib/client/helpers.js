Template.registerHelper('optionsAllUsersExceptAdmin', function() {
  return Meteor.users.find({email:{$ne: 'admin@dragoman-turkey.com'}}, {sort: {name: 1}}, {fields: {_id: 1, name: 1, lastName: 1}}).map(function(user) {
    return {value: user._id, label: user.name + ' ' + user.lastName};
  });
});

Template.registerHelper('today', function() {
  var today = new Date();
  today = new Date(today.setUTCHours(0,0,0,0));
  return today;
});

Template.registerHelper('tomorrow', function() {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow = new Date(tomorrow.setUTCHours(0,0,0,0));
  return tomorrow;
});

Template.registerHelper('isCounts', function() {
  return IsCounts.findOne({user: Meteor.userId()});
});

Meteor.startup(function() {
  moment.locale('tr');
});

Template.registerHelper('dateFormat', function(context, block) {
  var f = block.hash.format || 'MMM DD, YYYY hh:mm:ss A';
  return moment(context).format(f);
});

Template.registerHelper('datePickerOptions', function() {
  return {
    autoclose: true,
    keyboardNavigation: false,
    startDate: 'new Date()',
    language: 'tr',
    format: 'yyyy-mm-dd'
  };
});
