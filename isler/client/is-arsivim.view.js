Template.isArsivim.helpers({
  selector: function () {
    return {};
  }
});

Template.isArsivim.events({
  'click tbody>tr': function (e,t) {
    var dataTable = $(e.target).closest('table').DataTable();
    var rowData = dataTable.row(e.currentTarget).data();
    if (rowData && rowData._id) {
      Router.go('is', {_id: rowData._id});
    }
  }
});
