Ilgililer.after.insert(function (userId, doc) {
  var is = Isler.findOne({_id: doc.is});
  if (doc.ilgili !== is.sahibi && doc.ilgili !== is.sorumlusu) {
    IsCounts.update({user: doc.ilgili}, {$inc: {ilgilendigimIsler: 1}});
  }
});

Ilgililer.after.remove(function (userId, doc) {
  var is = Isler.findOne({_id: doc.is});
  IsCounts.update({user: doc.ilgili}, {$inc: {ilgilendigimIsler: -1}});
});
