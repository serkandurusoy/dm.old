Meteor.publishComposite('notlar', function(is) {
  check(is, String);
  this.unblock();

  return {
    find: function() {
      this.unblock();
      if (this.userId) {
        return Notlar.find({is: is});
      }
    }
  };

});
