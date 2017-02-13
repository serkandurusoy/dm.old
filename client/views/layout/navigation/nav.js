Template.navTop.onRendered(function() {
  this.$('[data-toggle="tooltip"]').tooltip();
});

Template.bildirimler.onCreated(function() {
  var self = this;
  self.count = new ReactiveVar(0);
  Tracker.autorun(function() {
    var count = 0;
    Bildirim.find().forEach(function(bildirim) {
      count += bildirim.adet;
    });
    self.count.set(count);
    rxFavico.set('type', 'bildirim');
    rxFavico.set('count', count);
  });
});

Template.bildirimler.helpers({
  bildirimToplam: function() {
    return !Meteor.userId() ? 0 : Template.instance().count.get();
  },
  bildirim: function() {
    return Bildirim.find();
  }
});

Template.navTop.events({
  'click [data-app-mail]': function(){
    window.open('https://mail.dragoman-turkey.com', '_blank');
  },
  'click [data-app-groups]': function(){
    window.open('https://groups.google.com/a/dragoman-turkey.com/forum/#!forum/info', '_blank');
  },
  'click [data-app-calendar]': function(){
    window.open('https://calendar.dragoman-turkey.com', '_blank');
  },
  'click [data-app-drive]': function(){
    window.open('https://drive.dragoman-turkey.com', '_blank');
  },
  'click [data-app-contacts]': function(){
    window.open('https://mail.google.com/mail/u/0/?tab=gm#contacts', '_blank');
  },
  'click [data-app-dm]': function(){
    window.location.replace('/');
  }
});

Template.navTopDown.events({
  'click [data-sidebar-toggle]' : function(e) {
    e.preventDefault();
    $('.nav-left').toggleClass("shownav");
  },
  'click [data-is-ekle]': function(e) {
    var view = Blaze.render(Template.isEkle, document.body);
    e.preventDefault();
    $('#isEkleModal').on('show.bs.modal', function () {
        $('.modal .modal-body').css('overflow-y', 'auto');
        $('.modal .modal-body').css('max-height', $(window).height() * 0.8);
    });
    $('#isEkleModal').on('hidden.bs.modal', function(event){
      // TODO: https://github.com/aldeed/meteor-autoform/issues/716#issuecomment-77776856
      //AutoForm.resetForm(isEkleForm);
      $('#isEkleForm')[0].reset();
    });
    $('#isEkleModal').on('hidden.bs.modal', function(event){
      Blaze.remove(view);
    });
    $('#isEkleModal').modal({
      keyboard: false
    });
  }
});
