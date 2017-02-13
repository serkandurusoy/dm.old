Meteor.methods({
  emailYeniIs : function(is) {
    check(is, String);
    this.unblock();
    var is = Isler.findOne({_id: is});
    // TODO: kendi kendine gonderme
    Email.send({
      to: is.sorumlusuUser().email,
      from: 'admin@dragoman-turkey.com',
      subject: '[DM] Yeni bir iş var',
      text: is.sahibiUser().name + ' ' + is.sahibiUser().lastName
            + ' sana ' + is.oncelik.toLowerCase() + ' öncelikli ve '
            + moment(is.vade).format('DD MMMM YYYY')
            + ' tarihine kadar bitmesi gereken bir iş verdi.'
            + '\n\n'
            + 'Konusu: '
            + '\n'
            + is.konu
            + '\n\n'
            + 'Ayrıntıları görmek için:'
            + '\n'
            + 'http://dm.dragoman-turkey.com/isler/is/' + is._id
            + '\n'
    });
  },
  emailDurumDegisti : function(is, yeniDurum) {
    check(is, String);
    check(yeniDurum, String);
    var mesaj = '';
    if (yeniDurum === 'Kapalı') {
      mesaj = 'tamamlandı';
    }
    if (yeniDurum === 'Açık') {
      mesaj = 'yeniden açıldı';
    }
    this.unblock();
    var is = Isler.findOne({_id: is});
    // TODO: kendi kendine gonderme
    Email.send({
      to: [is.sorumlusuUser().email, is.sahibiUser().email],
      from: 'admin@dragoman-turkey.com',
      subject: '[DM] Bir iş ' + mesaj,
      text: is.sorumlusuUser().name + ' ' + is.sorumlusuUser().lastName
      + ' sorumluluğundaki "' + is.konu.toLowerCase() + '" konulu iş '
      + mesaj + '.'
      + '\n\n'
      + 'Ayrıntıları görmek için:'
      + '\n'
      + 'http://dm.dragoman-turkey.com/isler/is/' + is._id
      + '\n'
    });
  },
  emailSorumluDegistiYeniye : function(is, eskiSorumlu) {
    check(is, String);
    check(eskiSorumlu, String);
    this.unblock();
    is = Isler.findOne({_id: is});
    eskiSorumlu = Meteor.users.findOne({_id: eskiSorumlu});
    // TODO: kendi kendine gonderme
    Email.send({
      to: is.sorumlusuUser().email,
      from: 'admin@dragoman-turkey.com',
      subject: '[DM] Mevcut bir iş sana devredildi',
      text: is.sahibiUser().name + ' ' + is.sahibiUser().lastName
      + ' ' + is.oncelik.toLowerCase() + ' öncelikli ve '
      + moment(is.vade).format('DD MMMM YYYY')
      + ' tarihine kadar bitmesi gereken bir işi '
      + eskiSorumlu.name + ' ' + eskiSorumlu.lastName
      + ' üzerinden alıp sana devretti.'
      + '\n\n'
      + 'Konusu: '
      + '\n'
      + is.konu
      + '\n\n'
      + 'Ayrıntıları görmek için:'
      + '\n'
      + 'http://dm.dragoman-turkey.com/isler/is/' + is._id
      + '\n'
    });
  },
  emailSorumluDegistiEskiye : function(is, eskiSorumlu) {
    check(is, String);
    check(eskiSorumlu, String);
    this.unblock();
    is = Isler.findOne({_id: is});
    eskiSorumlu = Meteor.users.findOne({_id: eskiSorumlu});
    // TODO: kendi kendine gonderme
    Email.send({
      to: eskiSorumlu.email,
      from: 'admin@dragoman-turkey.com',
      subject: '[DM] Üzerindeki bir iş başkasına devredildi',
      text: 'Daha önce senin üzerinde olan "' + is.konu.toLowerCase() + '" konulu iş '
      + is.sahibiUser().name + ' ' + is.sahibiUser().lastName + ' tarafından '
      + is.sorumlusuUser().name + ' ' + is.sorumlusuUser().lastName
      + ' üzerine atandı.'
      + '\n\n'
      + 'Ayrıntıları görmek için:'
      + '\n'
      + 'http://dm.dragoman-turkey.com/isler/is/' + is._id
      + '\n'
    });
  },
  emailTumBildirimler : function() {
    this.unblock();

    var offlineUsers = Meteor.users.find().map(function(user) {return user._id;});
    Presences.find().forEach(function(presence) {
      if (presence.state === 'online') {
        offlineUsers = _.without(offlineUsers, presence.userId);
      }
    });

    _.each(offlineUsers, function(user) {
      var bildirimler = Bildirim.find({ilgili: user});
      if (bildirimler && bildirimler.count() > 0) {
        var bildirimText = '';
        bildirimler.forEach(function(bildirim) {
          bildirimText = bildirimText.concat(
            'Konu  : ' , bildirim.konu , '\n',
            'Adet  : ' , bildirim.adet , '\n',
            'Detay : ' , 'http://dm.dragoman-turkey.com/isler/is/' , bildirim.is ,
            '\n\n'
          );
        });
        Email.send({
          to: Meteor.users.findOne({_id: user}).email,
          from: 'admin@dragoman-turkey.com',
          subject: '[DM] İşlerinle ilgili yeni bildirimlerin var',
          text: 'Aşağıdaki konuların, belirtilen adetler kadar yeni bildirimi'
          + ' senin dikkatini bekliyor.'
          + '\n\n'
          + bildirimText
          + 'Detay bağlantılarına tıklayarak ayrıntıları görebilirsin.'
        });
      }
    });

  }
});
