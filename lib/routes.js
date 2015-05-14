Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('issues_list', {
  name: 'issuesList',
  controller: 'IssuesListController',
  action: 'action',
  where: 'client'
});