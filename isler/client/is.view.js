Template.is.helpers({
  activeOncelik: function(oncelik) {
    return oncelik === this.oncelik ? 'active' : false;
  },
  durumKapali: function() {
    return this.durum === 'Kapalı' ? 'active' : false;
  },
  ilgili: function() {
    var ilgilileri = this.ilgilileri().map(function(ilgili) {
      return ilgili.ilgili;
    });
    return _.contains(ilgilileri, Meteor.userId());
  },
  editable: function() {
    return Meteor.userId() && ( Meteor.userId() === this.sahibi || Meteor.userId() === this.sorumlusu ) && this.durum === 'Açık';
  },
  editableAcKapa: function() {
    return Meteor.userId() && ( Meteor.userId() === this.sahibi || Meteor.userId() === this.sorumlusu );
  },
  editableBySahibi : function() {
    return Meteor.userId() && Meteor.userId() === this.sahibi && this.durum === 'Açık';
  },
  ilgisizlerExceptAdmin: function() {
    var ilgilileri = this.ilgilileri().map(function(ilgili) {
      return ilgili.ilgili;
    });
    return Meteor.users.find({_id: {$nin: ilgilileri}, email: {$ne: 'admin@dragoman-turkey.com'}});
  },
  digerEtiketler: function() {
    return _.difference(isEtiketleri, this.etiketler);
  }
});

Template.is.events({
  'click .editable.durum': function(e,t) {
    Meteor.call('isAcKapa', t.data._id);
  },
  'click .editable.dusuk': function(e,t) {
    Meteor.call('oncelikDegistir', t.data._id, 'Düşük');
  },
  'click .editable.normal': function(e,t) {
    Meteor.call('oncelikDegistir', t.data._id, 'Normal');
  },
  'click .editable.yuksek': function(e,t) {
    Meteor.call('oncelikDegistir', t.data._id, 'Yüksek');
  }
});

Template.digerIlgiliEditable.events({
  'click': function(e,t) {
    Meteor.call('ilgiliSil', Template.parentData(1)._id, t.data.ilgili);
  }
});

Template.ilgisizEditable.events({
  'click': function(e,t) {
    Meteor.call('ilgiliEkle', Template.parentData(1)._id, t.data._id);
  }
});

Template.etiketEditable.events({
  'click': function(e,t) {
    Meteor.call('etiketSil', Template.parentData(1)._id, t.data);
  }
});

Template.digerEtiketEditable.events({
  'click': function(e,t) {
    Meteor.call('etiketEkle', Template.parentData(1)._id, t.data);
  }
});

Template.vade.helpers({
  editingVade: function() {
    return Session.get('editingVade');
  }
});

Template.vadeDisplay.helpers({
  editableBySahibi: function() {
    return Meteor.userId() && Meteor.userId() === this.sahibi && this.durum === 'Açık';
  },
  isGecikmisVeAcik: function() {
    var now = new Date();
    return this.durum === 'Açık' && this.vade < now ? 'active' : false;
  }
});

Template.vadeDisplay.events({
  'click .editable': function() {
    Session.set('editingVade', true);
  }
});

Template.vadeEdit.onRendered(function() {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow = new Date(tomorrow.setUTCHours(0,0,0,0));

  $('input').datepicker({
      autoclose: true,
      keyboardNavigation: false,
      startDate: tomorrow,
      language: 'tr',
      format: 'yyyy-mm-dd'
    }
  ).on('hide', function(){
      Session.set('editingVade', false);
    }).on('changeDate', function(e) {
      var is   = Router.current().params._id,
          vade = new Date(e.date);
      vade = new Date(vade.getTime() + 24 * 60 * 60 * 1000);
      vade = new Date(vade.setUTCHours(0,0,0,0));
      Meteor.call('vadeDegistir', is, vade);
    });

  $('input').focus();

});


Template.sorumlusuHaricExceptAdmin.onRendered(function(){
  this.$('[data-toggle="dropdown"]').dropdown();
});

Template.sorumlusuHaricExceptAdmin.events({
  'click': function(e,t) {
    var yeniSorumlu = t.data._id,
        is          = Router.current().params._id;

    Meteor.call('sorumluDegistir', is, yeniSorumlu);
  }
});

AutoForm.hooks({
  notEkleForm: {
    onSuccess: function(operation, result, template) {
      if (result) {
        Meteor.call('bildirimEkle', Router.current().params._id);
        if (Meteor.userId()) {
          Meteor.call('bildirimKaldir', Router.current().params._id, Meteor.userId());
        }
      }
    }
  }
});
