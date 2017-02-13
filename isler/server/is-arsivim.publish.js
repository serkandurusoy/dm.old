Meteor.publishComposite('is_arsivim_ilgiler_id', function() {
  return {
    find: function() {
      if (this.userId) {
        return Ilgililer.find({ilgili: this.userId}, {fields: {is: 1}} );
      }
    }
  }
});

Meteor.publishComposite('is_arsivim_table', function(tableName, ids, fields) {
  check(ids, Array);
  check(tableName, String);
  check(fields, Match.Optional(Object));

  this.unblock();

  return {
    find: function() {
      this.unblock();
      if (this.userId) {
        return Isler.find({_id: {$in: ids}}, {fields: fields});
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
