import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('spot')
      .then((spots) => {
        return spots.filterBy('city', 'Chicago');
      });
  },

  activate () {
    Ember.$('body').addClass('welcome-faded');
  },

  deactivate () {
    Ember.$('body').removeClass('welcome-faded');
  }
});
