import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class HomeUserUserupdateRoute extends Route {
  @action
  useradd() {
    const name = document.userform.uname.value;
    const username = document.userform.uun.value;
    const email = document.userform.email.value;

    // console.log(name)
    // console.log(username)
    // console.log(email)
    let users = this.controllerFor('home.user').get('value');

    const obj = {
      id: users.length + 1,
      name: name,
      username: username,
      email: email,
    };

    this.controllerFor('home.user').set('value', [...users, obj]);
  }
}
