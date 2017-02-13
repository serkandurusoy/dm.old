SyncedCron.add({
  name: 'Online olmayan herkese bekleyen bildirimlerini hatırlat.',
  schedule: function(parser) {
    return parser.recur().on(9,11,13,15,17,19,21,23).hour();
  },
  job: function() {
    Meteor.call('emailTumBildirimler');
    // TODO: sabahin ilk mailinde islerim listesini de hatirlat
  }
});

// TODO: Yeni güne başlarken vadesi bugün olan açık işlere not ekle.
SyncedCron.add({
  name: 'Yeni güne başlarken vadesi bugün olan açık işlere not ekle.',
  schedule: function(parser) {
    return parser.recur().on(3).hour();
  },
  job: function() {
    // burayi doldur
  }
});

// TODO: Yeni güne başlarken vadesi dün olan, geciken açık işlere not ekle.
SyncedCron.add({
  name: 'Yeni güne başlarken vadesi dün olan, geciken açık işlere not ekle.',
  schedule: function(parser) {
    return parser.recur().on(4).hour();
  },
  job: function() {
    // burayi doldur
  }
});
