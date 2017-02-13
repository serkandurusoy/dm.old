NotlarSchema = new SimpleSchema({
  is: {
    label: 'İş',
    type: String,
    index: 1
  },
  ekleyen: {
    label: 'Ekleyen',
    type: String,
    autoValue: function() {
      var userId = Meteor.userId();
      if (this.isInsert) {
        return userId;
      } else if (this.isUpsert) {
        return {$setOnInsert: userId};
      } else {
        this.unset();
      }
    }
  },
  not: {
    label: 'Not',
    type: String,
    min: 3
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
    },
    index: 1
  }
});

Notlar = new Mongo.Collection('isNotlar');

Notlar.attachSchema(NotlarSchema);

Notlar.helpers({
  ekleyenUser: function() {
    return Meteor.users.findOne(this.ekleyen);
  }
});
