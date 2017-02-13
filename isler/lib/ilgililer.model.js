IlgililerSchema = new SimpleSchema({
  is: {
    label: 'İş',
    type: String,
    index: 1
  },
  ekleyen: {
    label: 'Ekleyen',
    type: String
  },
  ilgili: {
    label: 'İlgili',
    type: String,
    index: 1
  },
  tarih: {
    label: 'Tarih',
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  }
});

Ilgililer = new Mongo.Collection('isIlgililer');

Ilgililer.attachSchema(IlgililerSchema);

Ilgililer.helpers({
  ilgiliUser: function() {
    return Meteor.users.findOne(this.ilgili);
  }
});
