Meteor.publishComposite('is_counts', function() {
  return {
    find: function() {
      this.unblock();
      if (this.userId) {
        return IsCounts.find({user: this.userId});
      }
    }
  };
});
