import EmberRouter from '@ember/routing/router';
import config from 'emberapp/config/environment';
import Ember from 'ember';

// var App = Ember.Application.create();

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('home', function () {
    this.route('post');
    this.route('user', function () {
      this.route('userupdate');
    });
    this.route('postclick', { path: '/post/:id' });
    this.route('post-loading');
  });

  this.route('error', { path: '/*wildcard' });
  // this.route('post');
});

// App.MissingRoute = Em.Route.extend({
//   redirect: function () {
//       Em.debug('404 :: redirection to index');
//       this.transitionTo("login");
//   }
// });
