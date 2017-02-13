// TODO: oneme gore dizme
Template.islerim.helpers({
  selector: function () {
    // TODO: etiketlere gore suzme
    return {};
  }
});

Template.islerim.events({
  'click tbody>tr': function (e,t) {
    var dataTable = $(e.target).closest('table').DataTable();
    var rowData = dataTable.row(e.currentTarget).data();
    if (rowData && rowData._id) {
      Router.go('is', {_id: rowData._id});
    }
  }
});
