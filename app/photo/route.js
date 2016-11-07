import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
  return this.get('store').findRecord('photo', params.photo_id);
},

  actions: {
  // edit () {
  //   this.transitionTo('list.edit');
  // },
  // toggleItemDone (item) {
  //     item.toggleProperty('done');
  //     item.save();
  // },
  // createItem (newItem) {
  //     let item = this.get('store').createRecord('item', newItem);
  //     item.save();
  // },
  deletePhoto (photo) {
    console.log('getting to destroyRecord');
    photo.destroyRecord();
  },
},
});
