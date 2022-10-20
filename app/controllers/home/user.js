import Ember from 'ember';
export default Ember.Controller.extend({
  queryParams: ['search'],
  search: null,

  isShowingModal: false,
  actions: {
    event() {
      this.set('targetId', arguments[0]);
      this.toggleProperty('isShowingModal');
    },
  },

  updateres: Ember.computed('search', 'value', function () {
    if (this.search == undefined || this.search == '') {
      return this.value;
    } else {
      return this.value.filter((value) => {
        // this.search.set('search')
        return (
          value.id == this.search ||
          value.name.toLowerCase().includes(this.search.toLowerCase()) ||
          value.username.toLowerCase().includes(this.search.toLowerCase()) ||
          value.email.toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  }),

  updatedArray: Ember.computed('model', 'targetId', function () {
    // console.log(this.id);
    let array = this.model;
    return array[this.targetId - 1];
  }),

  // queryParams:[id],
  // id:null
});
