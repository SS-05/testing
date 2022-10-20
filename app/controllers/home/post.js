import Ember from 'ember';
export default Ember.Controller.extend({
  actions: {
    do() {
      this.transitionToRoute('home.postclick');
    },
  },

  updateres: Ember.computed('res', 'val', function () {
    if (this.res == undefined || this.res == '') {
      return this.val;
    } else {
      return this.val.filter((val) => {
        // console.log(this.res.split(" "))
        return val.title.toLowerCase().includes(this.res.toLowerCase());
      });
    }
  }),
});
