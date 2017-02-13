Security.defineMethod('ifCallerIlgilisi', {
  fetch: ['is','ekleyen'],
  deny: function (type, arg, userId, doc) {
    if (!(doc.is && doc.ekleyen)) return true;
    return !(_.contains(Isler.findOne({_id: doc.is}).ilgilileri().map(function(ilgili){return ilgili.ilgili;}), userId));
  }
});

Notlar.permit('insert').ifLoggedIn().ifCallerIlgilisi().apply();

Notlar.permit('update').never().apply();

Notlar.permit('remove').never().apply();
