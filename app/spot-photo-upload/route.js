import Ember from 'ember';

export default Ember.Route.extend({
  uploadImage: Ember.inject.service(),

  model(params) {
    return this.get('store').findRecord('spot', params.spot_id);
  },
  spot: {},
  photo: {},

  actions: {
    createUpload(newUpload, spot) {
      this.set('spot', spot);
      return this.get('uploadImage').newUploadService(newUpload)
      .then((res) => {
        // this.set('photo.upload', res.upload);
        let spot = this.get('spot');
        this.get('uploadImage').newPhotoService(res, spot)
        // get spot to add to
        // this.set('photo.spot', spot);


        // fire createRecord to spot
        // let photo = this.get('store').createRecord('photo', this.get('photo'));
        // return photo.save()
        .then((res) => {
          // this.transitionTo('spot', res.spot);
          this.refresh();
          this.transitionTo('spot', res.photo.spot);

        })
        .catch((err) => console.error(err));
      });
    },
  },
});
