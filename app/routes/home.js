import Route from '@ember/routing/route';
import fetch from 'fetch';
var a = [];

export default Route.extend({
  actions: {
    logout() {
      // this.toggleProperty('userIsLoggedIn');
      this.transitionToRoute('login');
    },

    activity() {
      a.push(window.history.state.path);
      const content = document.getElementById('activity');
      content.innerHTML = a;
    },
  },
  async model() {
    return await fetch('https://jsonplaceholder.typicode.com/posts').then(
      function (response) {
        return response.json();
      }
    );
  },
});
