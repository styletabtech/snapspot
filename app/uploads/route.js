import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('upload');
  },

//   actions: {
//     deleteUpload (data) {
//       let upload = data;
//       console.log('getting to destroyRecord');
//       console.log(upload);
//       upload.destroyRecord();
//       this.refresh();
//   },
// },
});
