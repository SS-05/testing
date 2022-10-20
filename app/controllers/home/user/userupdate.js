import Ember from 'ember';
export default Ember.Controller.extend({
  // show:false,
  id: 11,
  actions: {
    // useradd(){
    //     var id=this.id
    //    var name=this.name
    //    var username=this.username
    //    var email=this.email
    // },
    //     event() {
    //         this.toggleProperty('isShowingModal');
    //         this.set('targetId', arguments[0]);
    //       },
    //       updatedArray: Ember.computed('model', 'targetId', function () {
    //         // console.log(this.id);
    //         let array = this.model;
    //         return array[this.targetId - 1];
    //       }),
  },
});

// import Ember from 'ember';
// export default Ember.Controller.extend({

// isShowingModal: false,
//     actions: {
//         event() {
//             this.set('targetId', arguments[0]);
//             this.toggleProperty('isShowingModal');
//         },
//     },

//     updateres: Ember.computed('res', 'val', function () {
//         if (this.res == undefined || this.res == '') {
//             return this.val;
//         } else {
//             return this.val.filter((val) => {
//                 return (
//                     val.id == this.res ||
//                     val.name == this.res ||
//                     val.username == this.res ||
//                     val.email == this.res
//                 );
//             });
//         }
//     }),

//     updatedArray: Ember.computed('model', 'targetId', function () {
//         // console.log(this.id);
//         let array = this.model;
//         return array[this.targetId - 1];
//     }),

//     // queryParams:[id],
//     // id:null
// });
