BildirimSchema = new SimpleSchema({
  is: {
    label: 'İş',
    type: String,
    index: 1
  },
  konu: {
    label: 'Konu',
    type: String,
  },
  ilgili: {
    label: 'İlgili',
    type: String,
    index: 1
  },
  adet: {
    label: 'Adet',
    type: Number,
    // defaultValue: 0, // does not work with upsert
    optional: true //TODO: hack for upsert (I think)
  }
});

Bildirim = new Mongo.Collection('isBildirim');

Bildirim.attachSchema(BildirimSchema);
