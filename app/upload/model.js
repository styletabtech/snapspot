// import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  user: belongsTo('user'),
  image_url: attr('string'),
  spots: hasMany('spot'),
  // photos: hasMany('photo'),
  editable: attr('boolean'),
});
