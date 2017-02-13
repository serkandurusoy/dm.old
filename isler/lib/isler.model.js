IslerSchema = new SimpleSchema({
  konu: {
    label: 'Konu',
    type: String,
    min: 3
  },
  detay: {
    label: 'Detay',
    type: String,
    min: 3
  },
  oncelik: {
    label: 'Öncelik',
    type: String,
    allowedValues: ['Yüksek', 'Normal', 'Düşük'],
    defaultValue: 'Normal',
    index: -1
  },
  tarih: {
    label: 'Tarih',
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    },
    index: -1
  },
  vade: {
    label: 'Vade',
    type: Date,
    min: function() {
      var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      tomorrow = new Date(tomorrow.setUTCHours(0,0,0,0));
      return tomorrow;
    },
    autoValue: function() {
      var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
      tomorrow = new Date(tomorrow.setUTCHours(0,0,0,0));
      if (this.isSet) {
        var midnight = new Date(this.value);
        midnight = new Date(midnight.setUTCHours(0,0,0,0));
        return midnight;
      } else if (this.isInsert) {
        return tomorrow;
      } else if (this.isUpsert) {
        return {$setOnInsert: tomorrow};
      }
    },
    index: -1
  },
  sahibi: {
    label: 'Sahibi',
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
    },
    index: 1
  },
  sorumlusu: {
    label: 'Sorumlusu',
    type: String,
    allowedValues: function() {
      return Meteor.users.find({}, {fields: {_id: 1}})
                         .map(function(user) {
                           return user._id;
                         });
    },
    index: 1
  },
  durum: {
    label: 'Durum',
    type: String,
    allowedValues: ['Açık', 'Kapalı'],
    defaultValue: 'Açık',
    index: 1
  },
  etiketler: {
    label: 'Etiketler',
    type: [String],
    minCount: 1,
    allowedValues: isEtiketleri,
    index: 1
  }
});

Isler = new Mongo.Collection('isIsler');

Isler.attachSchema(IslerSchema);

Isler.helpers({
  sahibiUser: function() {
    return Meteor.users.findOne(this.sahibi);
  },
  sorumlusuUser: function() {
    return Meteor.users.findOne(this.sorumlusu);
  },
  ilgilileri: function() {
    return Ilgililer.find({is: this._id});
  },
  digerIlgilileri: function() {
    return Ilgililer.find({is: this._id, ilgili: {$nin: [this.sahibi, this.sorumlusu]}});
  },
  // TODO: tekneye de is verilmesin. ayrica admin ve teknenin sisteme girmesini de bir gozden gecirelim
  sorumlusuHaricExceptAdmin: function() {
    return Meteor.users.find({_id: {$ne: this.sorumlusu}, email: {$ne: 'admin@dragoman-turkey.com'}}, {sort: {name: 1, lastName: 1}});
  },
  notlari: function() {
    return Notlar.find({is: this._id}, {sort: {tarih: 1}});
  }
});
