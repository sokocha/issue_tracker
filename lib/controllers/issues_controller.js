IssuesController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('issues', Meteor.userId()).wait();
  },

  data: function () {
    // return a global data context like this:
    // Items.findOne({_id: this.params._id});
    return Issues.findOne({_id: this.params._id});
  },

  insert: function () {
    this.render('InsertIssue', {});
  },

  edit: function () {
    this.render('EditIssue', {});
  },

  list: function () {
    this.render('IssuesList', {});
  },

  action: function () {
    // You can create as many action functions as you'd like.
    // This is the primary function for running your route.
    // Usually it just renders a template to a page. But it
    // might also perform some conditional logic. Override
    // the data context by providing it as an option in the
    // last parameter.

    this.render('Issues', { /* data: {} */});
  }
});
