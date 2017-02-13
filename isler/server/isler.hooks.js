Isler.after.insert(function (userId, doc) {

  if (doc.sahibi !== doc.sorumlusu) {
    Ilgililer.insert({
      is: this._id, ekleyen: doc.sahibi, ilgili: doc.sorumlusu
    });
  }

  Ilgililer.insert({
    is: this._id, ekleyen: doc.sahibi, ilgili: doc.sahibi
  });

  IsCounts.update({user: doc.sahibi}, {$inc: {verdigimIsler: 1}});

  IsCounts.update({user: doc.sorumlusu}, {$inc: {islerim: 1}});

  Meteor.call('bildirimEkle', this._id);

  Meteor.call('emailYeniIs', this._id);

});

Isler.after.update(function (userId, doc, fieldNames, modifier, options) {
  // sorumlu degisiyorsa
  if ( _.contains(fieldNames,'sorumlusu')
      && doc.sorumlusu !== this.previous.sorumlusu ) {

    // yeni sorumlunun islerini artir
    IsCounts.update({user: doc.sorumlusu}, {$inc: {islerim: 1}});

    // yeni sorumlu ilgililerde degilse
    if ( !Ilgililer.findOne({is: doc._id, ilgili: doc.sorumlusu}, {fields: {_id: 1}}) ) {
      // yeni sorumluyu ilgililere ekle
      Ilgililer.insert({
        is: doc._id,
        ekleyen: doc.sahibi,
        ilgili: doc.sorumlusu
      });
    } else {
      // yeni sorumlu daha once ilgiliydiyse
      // ve ayni zamanda sahibi degilse
      if (doc.sahibi !== doc.sorumlusu) {
        // ilgilendiklerinin sayisini azalt
        IsCounts.update({user: doc.sorumlusu}, {$inc: {ilgilendigimIsler: -1}});
      }
    }

    // eski sorumlunun islerini azalt
    IsCounts.update({user: this.previous.sorumlusu}, {$inc: {islerim: -1}});

    // eski sorumlu ayni zamanda sahibi degilse
    if (this.previous.sahibi !== this.previous.sorumlusu) {
      // eski sorumlunun ilgilendiklerini artir
      IsCounts.update({user: this.previous.sorumlusu}, {$inc: {ilgilendigimIsler: 1}});
    }

    Notlar.insert({
      is: doc._id,
      not: 'İşin sorumlusu '
            + Meteor.users.findOne({_id: this.previous.sorumlusu}).name
            + ' '
            + Meteor.users.findOne({_id: this.previous.sorumlusu}).lastName
            + ' yerine '
            + Meteor.users.findOne({_id: doc.sorumlusu}).name
            + ' '
            + Meteor.users.findOne({_id: doc.sorumlusu}).lastName
            + ' olarak değişti.'
    });

    Meteor.call('bildirimEkle', doc._id);

    if (doc.sahibi !== doc.sorumlusu) {
      Meteor.call('emailSorumluDegistiYeniye', doc._id, this.previous.sorumlusu);
    }

    if (doc.sahibi !== this.previous.sorumlusu) {
      Meteor.call('emailSorumluDegistiEskiye', doc._id, this.previous.sorumlusu);
    }

  }

  if (_.contains(fieldNames,'durum')
      && doc.durum !== this.previous.durum ) {
    var inc = doc.durum === 'Açık' ? 1 : -1 ;
    var digerIlgililer = Ilgililer.find({
      $and: [{is: doc._id}, {ilgili: {$ne: doc.sahibi}}, {ilgili: {$ne: doc.sorumlusu}}]
    }).map(function(ilgili) {
      return ilgili.ilgili;
    });
    IsCounts.update({user: doc.sahibi}, {$inc: {verdigimIsler: inc}});
    IsCounts.update({user: doc.sorumlusu}, {$inc: {islerim: inc}});
    IsCounts.update({user: {$in: digerIlgililer}}, {$inc: {ilgilendigimIsler: inc}}, {multi: true});

    // TODO: tamamlandı yeniden açıldı vb yani maildeki gibi yazsın bu
    Notlar.insert({
      is: doc._id,
      not: 'İşin durumu '
      + this.previous.durum.toLowerCase()
      + ' yerine '
      + doc.durum.toLowerCase()
      + ' olarak değişti.'
    });

    Meteor.call('bildirimEkle', doc._id);
    Meteor.call('emailDurumDegisti', doc._id, doc.durum);

  }

  if (_.contains(fieldNames,'oncelik')
    && doc.oncelik !== this.previous.oncelik ) {

    Notlar.insert({
      is: doc._id,
      not: 'İşin önceliği '
      + this.previous.oncelik.toLowerCase()
      + ' yerine '
      + doc.oncelik.toLowerCase()
      + ' olarak değişti.'
    });

    Meteor.call('bildirimEkle', doc._id);

  }

  if (_.contains(fieldNames,'vade')
    && doc.vade !== this.previous.vade ) {

    Notlar.insert({
      is: doc._id,
      not: 'İşin vadesi '
      + moment(this.previous.vade).format('DD MMMM YYYY')
      + ' yerine '
      + moment(doc.vade).format('DD MMMM YYYY')
      + ' olarak değişti.'
    });

    Meteor.call('bildirimEkle', doc._id);

  }


}, {fetchPrevious: true});
