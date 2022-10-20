import Route from '@ember/routing/route';
export default class HomePostclickRoute extends Route {
  async model(params) {
    // console.log(params.id);
    // let post = await fetch('https://jsonplaceholder.typicode.com/posts').then(
    //   function (response) {
    //     return response.json();
    //   }
    // );

    let comments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`
      // 'https://jsonplaceholder.typicode.com/comments'
    ).then(function (response) {
      return response.json();
      // .then(function (arrayFilter) {
      //   return arrayFilter.filter((val) => {
      //     return val.postId == params.id;
      //   });
      // });
    });
    // return { post: post[params.id - 1], comments };

    return { comments, params };
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    var parent;
    this.modelFor('home').forEach((val) => {
      if (val.id == model.params.id) {
        // console.log(val)
        parent = val;
      }
    });
    // .filter((val)=>{
    //   return val.id==model.params.id
    // })
    console.log(parent);
    controller.set('parent', parent);
  }
}
