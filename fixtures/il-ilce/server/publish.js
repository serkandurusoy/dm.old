Meteor.publishComposite('il_ilce', function() {
  return {
    find: function() {
      this.unblock();
      if (this.userId) {
        return Il.find({});
      }
    },
    children: [
      {
        find: function(il) {
          this.unblock();
          if (il && il.il) {
            return Ilce.find({il: il.il});
          }
        }
      }
    ]
  };
});
