/*****************************************************************************/
/* InsertIssue: Event Handlers */
/*****************************************************************************/
Template.InsertIssue.events({
});

/*****************************************************************************/
/* InsertIssue: Helpers */
/*****************************************************************************/
Template.InsertIssue.helpers({
});

/*****************************************************************************/
/* InsertIssue: Lifecycle Hooks */
/*****************************************************************************/
Template.InsertIssue.created = function () {
};

Template.InsertIssue.rendered = function () {
};

Template.InsertIssue.destroyed = function () {
};

AutoForm.addHooks(null, function(){
  return Router.go('issuesList');
});




