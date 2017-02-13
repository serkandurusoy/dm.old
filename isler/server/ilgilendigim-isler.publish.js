Meteor.publishComposite('ilgilendigim_isler_ilgiler_id', function() {
  return {
    find: function() {
      if (this.userId) {
        return Ilgililer.find({ilgili: this.userId, ekleyen: {$ne: this.userId}}, {fields: {is: 1}} );
      }
    }
  }
});

Meteor.publishComposite('ilgilendigim_isler_table', function(tableName, ids, fields) {
  check(ids, Array);
  check(tableName, String);
  check(fields, Match.Optional(Object));

  this.unblock();

  // TODO: Aslinda galiba yukaridaki pub buradan birinci seviye olarak verilebilir
  // ve o zaman tamamen reactive olabilir, bunu bir dene. ama denedim, olmadi.
  // reactive olmasi icin baska ne olabilir?
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
