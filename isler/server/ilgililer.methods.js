Meteor.methods({
  ilgiliSil: function(is,ilgili) {
    check(is, String);
    check(ilgili, String);

    Ilgililer.remove({is: is, ilgili: ilgili});

    Notlar.insert({
      is: is,
      not: 'İşin ilgilileri arasından '
      + Meteor.users.findOne({_id: ilgili}).name
      + ' '
      + Meteor.users.findOne({_id: ilgili}).lastName
      + ' kaldırıldı.'
    });

    Meteor.call('bildirimEkle', is);
    Meteor.call('bildirimKaldir', is, ilgili);

  },
  ilgiliEkle: function(is,ilgili) {
    check(is, String);
    check(ilgili, String);

    Ilgililer.insert({is: is, ekleyen: Meteor.userId(), ilgili: ilgili});

    Notlar.insert({
      is: is,
      not: 'İşin ilgilileri arasına '
      + Meteor.users.findOne({_id: ilgili}).name
      + ' '
      + Meteor.users.findOne({_id: ilgili}).lastName
      + ' eklendi.'
    });

    Meteor.call('bildirimEkle', is);

  }
});
