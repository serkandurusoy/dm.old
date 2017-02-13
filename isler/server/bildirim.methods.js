Meteor.methods({
  bildirimKaldir: function(is, ilgili) {
    check(is, String);
    check(ilgili, String);

    Bildirim.remove({is: is, ilgili: ilgili});
  },
  bildirimEkle: function(is) {
    check(is, String);
    var isCursor = Isler.findOne({_id: is});
    var konu = isCursor.konu;

    isCursor.ilgilileri().forEach(function(ilgili) {
      //TODO: do not use upsert!
      Bildirim.upsert({
        is: is,
        ilgili: ilgili.ilgili,
        konu: konu
      },
        {$inc: {adet: 1}}
      );
    });

  }
});
