Meteor.methods({
  sorumluDegistir: function(is, yeniSorumlu) {
    check(is, String);
    check(yeniSorumlu, String);
    Isler.update({_id: is}, {$set: {sorumlusu: yeniSorumlu}});
    // not ekleme hook icinde yapildi
  },
  isAcKapa: function(is) {
    check(is, String);
    var yeniDurum = Isler.findOne({_id: is}).durum === 'Açık' ? 'Kapalı' : 'Açık';
    Isler.update({_id: is}, {$set: {durum: yeniDurum}});
    // not ekleme hook icinde yapildi
  },
  vadeDegistir: function(is, vade) {
    check(is, String);
    check(vade, Date);
    var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    tomorrow = new Date(tomorrow.setUTCHours(0,0,0,0));
    if (vade >= tomorrow) {
      Isler.update({_id: is}, {$set: {vade: vade}});
    }
    // not ekleme hook icinde yapildi
  },
  oncelikDegistir: function(is, oncelik) {
    check(is, String);
    check(oncelik, String);
    Isler.update({_id: is}, {$set: {oncelik: oncelik}});
    // not ekleme hook icinde yapildi
  },
  etiketSil: function(is, etiket) {
    check(is, String);
    check(etiket, String);
    if (_.contains(isEtiketleri,etiket)) {
      Isler.update({_id: is, 'etiketler.1': {$exists: true}}, {$pull: { etiketler: etiket }});
      Notlar.insert({
        is: is,
        not: 'Etiketler arasından '
        + etiket.toLowerCase()
        + ' kaldırıldı.'
      });
      Meteor.call('bildirimEkle', is);
    }
  },
  etiketEkle: function(is, etiket) {
    check(is, String);
    check(etiket, String);
    if (_.contains(isEtiketleri,etiket)) {
      Isler.update({_id: is}, {$push: {etiketler: etiket}});
      Notlar.insert({
        is: is,
        not: 'Etiketler arasına '
        + etiket.toLowerCase()
        + ' eklendi.'
      });
      Meteor.call('bildirimEkle', is);
    }
  }
});
