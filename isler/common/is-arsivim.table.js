TabularTables.isArsivim = new Tabular.Table({
  selector: function(userId) {
    var ilgilendiklerim = Ilgililer.find({
      ilgili: userId
    }, {
      fields: {
        is: 1
      }
    }).map(function(ilgili) {
      return ilgili.is;
    });
    return {
      _id: {
        $in: ilgilendiklerim
      },
      durum: 'Kapalı'
    };
  },
  name: 'is_arsivim',
  collection: Isler,
  pub: 'is_arsivim_table',
  sub: new SubsManager(),
  order: [[0, 'desc'],[1, 'desc'],[2, 'desc']],
  columns: [
    {
      data: 'vade',
      visible: false
    },
    {
      data: 'oncelik',
      visible: false
    },
    {
      data: 'tarih',
      visible: false
    },
    {
      data: 'sahibi',
      title: 'Sahibi',
      render: function(data, type, row, meta) {
        if (row && row.sahibiUser() && row.sahibiUser().name ) {
          return row.sahibiUser().name;
        } else {
          return '';
        }
      },
      width: '80px',
      orderable: false
    },
    {
      data: 'sorumlusu',
      title: 'Sorumlusu',
      render: function(data, type, row, meta) {
        if (row && row.sorumlusuUser() && row.sorumlusuUser().name ) {
          return row.sorumlusuUser().name;
        } else {
          return '';
        }
      },
      width: '80px',
      orderable: false
    },
    {
      data: 'konu',
      title: 'Konu',
      orderable: false
    }
  ]
});
