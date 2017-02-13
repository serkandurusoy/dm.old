TabularTables.ilgilendigimIsler = new Tabular.Table({
  selector: function(userId) {
    // TODO: make this reactive but how???
    var cursor = Ilgililer.find({
      ilgili: userId,
      ekleyen: {$ne: userId}
    }, {
      fields: {
        is: 1
      }
    });
    var isler = cursor.map(function(ilgili) {
      return ilgili.is;
    });
    return {
      _id: {$in: isler},
      sahibi: {$ne: userId},
      sorumlusu: {$ne: userId},
      durum: 'Açık'
    };
  },
  name: 'ilgilendigim_isler',
  collection: Isler,
  pub: 'ilgilendigim_isler_table',
  sub: new SubsManager(),
  order: [[0, 'asc'],[1, 'desc'],[2, 'asc']],
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
  ],
  createdRow: function(row, data, dataIndex) {
    var today = new Date();
    if (data.vade < today) {
      $(row).addClass('warning');
    }
  }
});
