Meteor.publishComposite('is', function(id) {
  check(id, String);
  this.unblock();

  return {
    find: function() {
      this.unblock();
      if (this.userId) {
        return Isler.find({_id: id});
      }
    },
    children: [
      {
        find: function(is) {
          this.unblock();
          if (is) {
            return Ilgililer.find({is: is._id});
          }
        }
      }
    ]
  };
});
