import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('spot', params.spot_id);
},

actions: {
  delete () {
    console.log('getting to the delete action in spot');
    console.log('uploads is', this.get('upload'));
    this.sendAction('delete', this.get('upload'));
  },
},
});
