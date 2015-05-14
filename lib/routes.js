Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'IssuesController',
  action: 'action',
  where: 'client'
});


Router.route('issues_list', {
  name: 'issuesList',
  controller: 'IssuesController',
  action: 'list',
  where: 'client'
});

Router.route('insert_issue', {
  name: 'insertIssue',
  controller: 'IssuesController',
  action: 'insert',
  where: 'client'
});

Router.route('/issues/:_id', {
  name: 'editIssue',
  controller: 'IssuesController',
  action: 'edit',
  where: 'client'
});

Router.onBeforeAction(function(){
  if (!Meteor.user()) {
    this.render('Access Denied');
  } else {
    this.next();
  }
}, {only: ['issuesList', 'insertIssue']});