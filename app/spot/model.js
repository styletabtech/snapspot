import DS from 'ember-data';

  export default DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    city: DS.attr('string'),
    state: DS.attr('string'),
    zip: DS.attr('string'),
    description: DS.attr('string'),
    tag: DS.attr('string'),
    photos: DS.hasMany('photo'),
  });
