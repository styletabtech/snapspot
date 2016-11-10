import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('photo');
  },

  actions: {
    deletePhoto (data) {
      let photo = data;
      // console.log('getting to destroyRecord');
      // console.log(photo);
      photo.destroyRecord();
      this.transitionTo('photos');
  },
},
});
