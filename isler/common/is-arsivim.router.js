Router.route('/isler/is-arsivim', {
  name: 'isArsivim',
  template: 'isArsivim',
  waitOn: function() {
    if (Meteor.user()) {
      return [
        Meteor.subscribe('is_arsivim_ilgiler_id'),
        Meteor.subscribe('is_counts')
      ];
    }
  },
  action: function() {
    this.render();
  },
  onBeforeAction: requireLogin
});
