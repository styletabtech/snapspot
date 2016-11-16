import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('spot', params.spot_id);
},

actions: {
  deleteUpload (data) {
    let upload = data;
    // console.log('getting to destroyRecord');
    // console.log(upload);
    upload.destroyRecord();
    this.refresh();
},
},

activate () {
  Ember.$('body').addClass('spot-background');
},

deactivate () {
  Ember.$('body').removeClass('spot-background');
},
});
