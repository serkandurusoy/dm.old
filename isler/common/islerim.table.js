TabularTables.islerim = new Tabular.Table({
  selector: function(userId) {
    return {
      sorumlusu: userId,
      durum: 'Açık'
    };
  },
  name: 'islerim',
  collection: Isler,
  pub: 'islerim_table',
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
      data: 'konu',
      title: 'Konu',
      render: function(data, type, row, meta) {
        return row.oncelik === 'Yüksek' ? '<i class="fa fa-fw fa-arrow-circle-up"></i> ' + row.konu : row.konu;
      },
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
