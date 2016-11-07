import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

  // createItem () {
  //   let newItem = this.get('form');
  //   newItem.list = this.get('list');
  //   this.sendAction('createItem', newItem);
  //   this.set('form.text', null);
  // },
  deletePhoto (photo) {
    this.sendAction('deletePhoto', photo);
    console.log('getting to deletePhoto in lib component');
  },
  // edit (list) {
  //   this.sendAction('edit', list);
  //
  // }
},
});
