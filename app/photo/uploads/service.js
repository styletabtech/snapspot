import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

    newPhotoUpload (newPhoto) {
      return this.get('ajax').post('/photos', { // This will use the ajax service and allow us to send a post request to the `/photos` route on in API
        data: newPhoto, // The FormData object which we have called `newPhoto`
        contentType: false,
        processData: false,
      });
     },
});
