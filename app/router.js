import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('photos');
  this.route('photo', { path: '/photos/:photo_id' });
  this.route('new-photo');
  this.route('spots');
  this.route('spot', { path: '/spots/:spot_id' }, function() {
    this.route('edit');
  });
  this.route('uploads');
  this.route('upload', { path: '/uploads/:upload_id'});
  this.route('user', { path: '/users/:user_id' });
  this.route('new-upload');
  this.route('spot-photo-upload', { path: '/spots/:spot_id/upload'});
  this.route('boston', { path: '/spots/boston'});
  this.route('new-york-city', { path: '/spots/new-york-city'});
  this.route('dc', { path: '/spots/dc'});
  this.route('miami', { path: '/spots/miami'});
  this.route('los-angeles', { path: '/spots/los-angeles'});
  this.route('chicago', { path: '/spots/chicago'});
});

export default Router;
