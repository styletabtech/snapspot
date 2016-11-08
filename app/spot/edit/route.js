import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save (spot) {
      spot.save()
      .then((spot) => { this.transitionTo('spot', spot); })
      ;
    },

    cancel (spot) {
      spot.rollbackAttributes();
      history.back();
    }
  }
});
