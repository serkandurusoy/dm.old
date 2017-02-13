Router.route('/isler/verdigim-isler', {
  name: 'verdigimIsler',
  template: 'verdigimIsler',
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
