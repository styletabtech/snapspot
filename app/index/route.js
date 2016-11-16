import Ember from 'ember';

export default Ember.Route.extend({
  activate () {
  Ember.$('body').addClass('welcome');
},

deactivate () {
  Ember.$('body').removeClass('welcome');
}
});
