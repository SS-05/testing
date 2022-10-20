import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class postroute extends Route {
  // beforeModel(transition) {
  //   if (!this.controllerFor('login').userIsLoggedIn) {
  //     let loginController = this.controllerFor('login');
  //     loginController.set('previousTransition', transition);
  //     this.transitionTo('login');
  //   }
  // }
  async model() {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(
      function (response) {
        return response.json();
      }
    );
  }
  // afterModel() {
  //   console.log(window.location.href.substring(-8));
  // }
  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('val', model);
  }
}
