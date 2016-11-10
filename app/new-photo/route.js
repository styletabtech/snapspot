import Ember from 'ember';

export default Ember.Route.extend({
  uploadImage: Ember.inject.service(),

  actions: {
    createPhoto(newPhoto) {
      //  console.log('newPhoto is', newPhoto); // We can console log the newPhoto object to ensure it is being passed through
        // console.log('uploads is', this.get('uploads'));
        // console.log('newPhoto is', newPhoto);
        // console.log('newPhoto upload is', newPhoto.photo_upload);
        // console.log('newPhoto file_name is', newPhoto.file_name);
        // console.log('newPhoto is', newPhoto.get('photo_upload_url'));
        return this.get('uploadImage').newPhotoUpload(newPhoto) // This will use the uploads service, which gives us access to the `newPhotoUpload` function.
       .then(() => this.transitionTo('spot')) // Once the upload is successful, we will transition to our list of photos and if all worked, we should see the newly created photo
       // .then(() => // patching to the spot??)
       .catch((error) => console.error(error));
    },
  },
});
