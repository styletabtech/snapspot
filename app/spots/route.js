import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('spot');
  },
  activate () {
    Ember.$('body').addClass('welcome-faded');
  },

  deactivate () {
  Ember.$('body').removeClass('welcome-faded');
}
});
