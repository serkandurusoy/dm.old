Router.route('/isler/is/:_id', {
  name: 'is',
  template: 'is',
  waitOn: function() {
    if (Meteor.user()) {
      return [
        Meteor.subscribe('is', this.params._id),
        Meteor.subscribe('notlar', this.params._id),
        Meteor.subscribe('is_counts')
      ];
    }
  },
  action: function() {
    this.render();
  },
  data: function() {
    return Isler.findOne({_id: this.params._id});
  },
  onRerun: function() {
    kullanicidanBildirimKaldir(this.params._id);
    this.next();
  },
  onStop: function() {
    kullanicidanBildirimKaldir(this.params._id);
  },
  onBeforeAction: requireLogin
});

var kullanicidanBildirimKaldir = function(is) {
  Meteor.setTimeout(function(){
    if (is && Meteor.userId()) {
      Meteor.call('bildirimKaldir', is, Meteor.userId());
    }
  }, 0);
};
