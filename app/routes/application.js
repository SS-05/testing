import Route from '@ember/routing/route';

// export default class ApplicationRoute extends Route {
//   beforeModel(transition) {
//     if (!this.controllerFor('login').userIsLoggedIn) {
//       let loginController = this.controllerFor('login');
//       loginController.set('previousTransition', transition);
//       this.transitionTo('login');
//     }
//   }

//   actions:{

//   }
// }

export default Route.extend({
  beforeModel(transition) {
    if (!this.controllerFor('login').userIsLoggedIn) {
      let loginController = this.controllerFor('login');
      loginController.set('previousTransition', transition);
      this.transitionTo('login');
    }
  },
});
