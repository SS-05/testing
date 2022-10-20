import Route from '@ember/routing/route';

export default class userroute extends Route {
  model() {
    return fetch('https://jsonplaceholder.typicode.com/users').then(function (
      response
    ) {
    console.log(response);
      return response.json();
    });
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    // console.log(model)
    controller.set('value', model);
  }
}
