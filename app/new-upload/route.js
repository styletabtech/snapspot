import Ember from 'ember';

export default Ember.Route.extend({
  uploadImage: Ember.inject.service(),

  actions: {
    createUpload(newUpload) {
      //  console.log(newUpload); // We can console log the newMovie object to ensure it is being passed through
       return this.get('uploadImage').newUploadService(newUpload) // This will use the uploads service, which gives us access to the `newMovieUpload` function.
      // .then(() => this.get('uploadImage').newPhotoService(newUpload))
      // .then(() => this.get('uploadImage').newSpotImageService(newUpload))
      .then((res) => {
         console.log(res);
        this.transitionTo('/users');
      }) // Once the upload is successful, we will transition to our list of movies and if all worked, we should see the newly created movie
      .catch((error) => console.error(error));
    },
  },
});
