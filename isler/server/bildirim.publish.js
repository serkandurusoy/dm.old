// Publish this universally, we don't have to subscribe, it is always published
Meteor.publish(null, function() {
  this.unblock();
  if (this.userId) {
    return Bildirim.find({ilgili: this.userId});
  } else {
    this.ready();
  }
});
