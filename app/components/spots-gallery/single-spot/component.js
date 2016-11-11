import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'p',

  isEditable: Ember.computed('auth.credentials.id', 'upload.user.id', {
    get () {
      let uploadUserId = parseInt(this.get('upload.user.id'));
      let authUserId = this.get('auth.credentials.id');

      return uploadUserId === authUserId ;
    },
  }),

  auth: Ember.inject.service(),

  actions: {
    delete () {
      // console.log('getting to the delete action in component');
      // console.log(this.get('upload'));
      this.sendAction('delete', this.get('upload'));
    },
  },
});
