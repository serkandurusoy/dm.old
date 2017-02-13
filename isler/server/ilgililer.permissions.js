Security.defineMethod('ifCallerSahibiOrSorumlusu', {
  fetch: ['is'],
  deny: function (type, arg, userId, doc) {
    if (!(doc.is)) return true;
    return !(_.contains(_.values(Isler.findOne(doc.is, {fields: {sahibi: 1, sorumlusu: 1}})), userId));
  }
});

Security.defineMethod('ifIlgiliNotSahibiOrSorumlusu', {
  fetch: ['is','ilgili'],
  deny: function (type, arg, userId, doc) {
    if (!(doc.is && doc.ilgili)) return true;
    return _.contains(_.values(Isler.findOne(doc.is, {fields: {sahibi: 1, sorumlusu: 1}})), doc.ilgili);
  }
});

Security.defineMethod('ifIlgiliNotExisting', {
  fetch: ['is','ilgili'],
  deny: function (type, arg, userId, doc) {
    if (!(doc.is && doc.ilgili)) return true;
    return Ilgililer.findOne({is: doc.is, ilgili: doc.ilgili}, {fields: {_id: 1}});
  }
});

Ilgililer.permit('insert').ifLoggedIn().ifCallerSahibiOrSorumlusu().ifIlgiliNotExisting().apply();

Ilgililer.permit('update').never().apply();

Ilgililer.permit('remove').ifLoggedIn().ifCallerSahibiOrSorumlusu().ifIlgiliNotSahibiOrSorumlusu().apply();
