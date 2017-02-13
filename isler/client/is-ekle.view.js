// TODO: LOOK AT NAV.JS FOR THIS AND FIX IT SOON!!!
// TODO: IS EKLE EVENT SHOULD BE FIRED HERE, NOT THERE
// TODO: TOPLU IS EKLEME, DUYURU GIBI
// TODO: SISTEM DUYURUSU OZELLIGI
// TODO: IS EKLENIRKEN DEFAULT TARIH SACMA OLUYOR
AutoForm.hooks({
  isEkleForm: {
    onSuccess: function(operation, result, template) {
      if (result) {
        //TODO: https://github.com/aldeed/meteor-autoform/issues/703#issuecomment-77777113
        //Router.go('is', {_id: result});
        window.location.replace('/isler/is/' + result);
      }
    }
  }
});
