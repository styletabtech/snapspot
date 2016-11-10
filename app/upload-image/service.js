import Ember from 'ember';

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  newUploadService (newUpload) {
    return this.get('ajax').post('/uploads', { // This will use the ajax service and allow us to send a post request to the `/movies` route on in API
      data: newUpload, // The FormData object which we have called `newMovie`
      contentType: false,
      processData: false,
    });
  },

  newPhotoService (res, spot) {
    return this.get('ajax').post('/photos', { // This will use the ajax service and allow us to send a post request to the `/movies` route on in API
      data: {
        photo: {
          spot_id: spot.id,
          upload_id: res.upload.id, // The FormData object which we have called `newMovie`
        }
      }
    });
  }

  // newSpotImageService (newUpload) {
  //   return this.get('ajax').patch('/spots/`${spot.id}`', { // This will use the ajax service and allow us to send a post request to the `/movies` route on in API
  //     data: newUpload, // The FormData object which we have called `newMovie`
  //     contentType: false,
  //     processData: false,
  //   });
  // },
});
