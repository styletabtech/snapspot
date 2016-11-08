import Ember from 'ember';

export default Ember.Component.extend({

  newPhoto: {}, // New photo object being constructed from the form

  actions: {
    create() {
      let newPhoto = new FormData(document.getElementById('new-photo-form'));
    //  new FormData(Ember.$('#new-photo-form')); // Ember jQuery to find the form by it's id.
      console.log('In create', newPhoto.photo_upload);
      this.sendAction('create', newPhoto); // Grabs the newPhoto object which has been converted into FormData and sends it up to the route template
      this.set('newPhoto', null); // Resets the newPhoto Object
    }
  }
});
