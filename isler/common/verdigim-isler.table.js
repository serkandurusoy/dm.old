TabularTables.verdigimIsler = new Tabular.Table({
  selector: function(userId) {
    return {
      sahibi: userId,
      durum: 'Açık'
    };
  },
  name: 'verdigim_isler',
  collection: Isler,
  pub: 'verdigim_isler_table',
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
