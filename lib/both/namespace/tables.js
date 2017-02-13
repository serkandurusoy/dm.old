TabularTables = {};

if (Meteor.isClient) {

  Template.registerHelper('TabularTables', TabularTables);

  $.extend( $.fn.dataTable.defaults, {
    searching: false,
    processing: true,
    pagingType: 'full',
    language: {
      processing: 'İşleniyor...',
      search: 'Ara :',
      lengthMenu: 'Sayfada _MENU_ kayıt göster',
      info: 'Toplam _TOTAL_ kayıttan _START_ ile _END_ arası',
      infoEmpty: 'Kayıt bulunamadı',
      infoFiltered: '(toplam _MAX_ kayıt arasından filtrelenen)',
      infoPostFix: '',
      loadingRecords: 'Yükleniyor...',
      zeroRecords: '&nbsp;',
      emptyTable: '&nbsp;',
      paginate: {
        first: '<<',
        last: '>>',
        next: '>',
        previous: '<'
      }
    }
  });

}

