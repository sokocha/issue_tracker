Issues = new Mongo.Collection('issues');

Issues.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    max: 200
  },
  description: {
    type: String,
    label: 'Description',
    max: 1024
  },
  dueDate: {
    type: Date,
    label: 'Date',
    optional: true
  },
  priority: {
    type: String
    label: 'Priority',
    allowedVales: ['Extremely Urgent', 'High', 'Medium', 'Low']
    optional: false
  },
  createdBy: {
    type: String,
    autoValue: function() {
      return this.userId
    }
  }
});

if (Meteor.isServer) {
  Issues.allow({
    insert: function (userId, doc) {
      return false;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });

  Issues.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
