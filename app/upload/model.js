import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  image_url: DS.attr('string'),
  spots: DS.hasMany('spot'),
  // photos: hasMany('photo'),
});
