import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    home() {
      this.transitionTo('login');
    },
  },
});
