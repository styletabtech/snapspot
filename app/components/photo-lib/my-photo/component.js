import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  actions: {
    delete () {
      console.log('getting to the delete action in my-photo component');
      this.sendAction('deletePhoto', this.get('photo'));
    },
  },
});
