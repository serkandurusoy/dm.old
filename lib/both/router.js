requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      loginWithGoogle();
      this.next();
    }
  } else {
    this.next();
  }
}

Router.configure({
  progressSpinner: false,
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'home',
  action: function() {
    Router.go('islerim');
  },
  onBeforeAction: requireLogin
});

Router.route('/logout', {
  name: 'logout',
  template: 'loading',
  onBeforeAction: function() {
    Meteor.logout();
    window.location.replace('https://accounts.google.com/Logout');
    this.next();
  }
});

var loginWithGoogle = function() {
  if (Meteor.isClient) {
    Session.set('loginError', undefined);
    Meteor.loginWithGoogle({
      loginStyle         : "redirect",
      requestPermissions : ['profile', 'email'],
      requestOfflineToken: true
    }, function (err) {
      if (err)
        Session.set('loginError', 'reason: ' + err.reason + ' message: ' + err.message || 'Unknown error');
    });
  }
}


var requireModernBrowser = function() {
  var browser = BrowserDetect.browser.toLowerCase(),
      version  = parseInt(BrowserDetect.version)
      ;
  if (browser === 'explorer' && version < 10) {
    window.location.replace('http://outdatedbrowser.com/en');
    this.next();
  } else {
    this.next();
  }
}

//Router.onBeforeAction(requireModernBrowser);

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});
