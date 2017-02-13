Router.route('/isler/ilgilendigim-isler', {
  name: 'ilgilendigimIsler',
  template: 'ilgilendigimIsler',
  waitOn: function() {
    if (Meteor.user()) {
      return [
        Meteor.subscribe('ilgilendigim_isler_ilgiler_id'),
        Meteor.subscribe('is_counts')
      ];
    }
  },
  action: function() {
    this.render();
  },
  onBeforeAction: requireLogin
});
