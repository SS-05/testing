import Ember from 'ember';
export default Ember.Controller.extend({
  userIsLoggedIn: true,
  actions: {
    homePage() {
      var un = this.un;
      var pw = this.pw;

      if (un.length != undefined && pw.length != undefined) {
        //  this.set('userIsLoggedIn', true);
        this.toggleProperty('userIsLoggedIn');
        this.transitionToRoute('home');
      }
    },

    loginAction() {
      let previousTransition = this.previousTransition;
      if (previousTransition) {
        this.set('previousTransition', null);
        previousTransition.retry();
      } else {
        this.transitionToRoute('login');
      }
    },
  },
});
