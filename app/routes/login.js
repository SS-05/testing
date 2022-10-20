import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class LoginRoute extends Route {
  // beforeModel(transition) {
  //     if (!this.controllerFor('').userIsLoggedIn) {
  //       let loginController = this.controllerFor(' homePage');
  //       loginController.set('previousTransition', transition);
  //       this.transitionTo(' homePage');
  //     }
  //   }
  //  setupController(controller, error) {
  //         console.log(error.message);
  //         super.setupController(...arguments)
  //       }
  //   action
  //   error(error, transition) {
  //     if (error.status === '403') {
  //       this.router.replaceWith('error');
  //     } else {
  //       // Let the route above this handle the error.
  //       return true;
  //     }
  //   }
}
