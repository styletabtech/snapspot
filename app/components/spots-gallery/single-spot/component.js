import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'p',

  upload: {},
  actions: {
    delete () {
      console.log('getting to the delete action in component');
      console.log(this.get('upload'));
      this.sendAction('delete', this.get('spot'));
    },
  },
});
