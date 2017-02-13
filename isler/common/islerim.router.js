Router.route('/isler/islerim', {
  name: 'islerim',
  template: 'islerim',
  waitOn: function() {
    if (Meteor.user()) {
      return [
        Meteor.subscribe('is_counts')
      ];
    }
  },
  action: function() {
    this.render();
  },
  onBeforeAction: requireLogin
});
