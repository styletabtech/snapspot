import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('spot')
      .then((spots) => {
        return spots.filterBy('city', 'New York City');
      });
  },

  activate () {
    Ember.$('body').addClass('welcome');
  },

  deactivate () {
    Ember.$('body').removeClass('welcome');
  }
});
