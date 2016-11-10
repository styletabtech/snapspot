import Ember from 'ember';

export default Ember.Component.extend({

  newUpload: {}, // New movie object being constructed from the form

  actions: {
    create() {
      let newUpload = new FormData(document.getElementById('new-upload-form')); // Ember jQuery to find the form by it's id.
      console.log('In create image is', newUpload.image);
      console.log('In create spot id is', newUpload.spot_id);
      this.sendAction('create', newUpload); // Grabs the newMovie object which has been converted into FormData and sends it up to the route template
      this.set('newUpload', null); // Resets the newMovie Object
    }
  }

});
