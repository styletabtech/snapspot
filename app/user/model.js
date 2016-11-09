import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
// import DS from 'ember-data';

export default Model.extend({
  email: attr('string'),
  uploads: hasMany('upload'),
  spots: hasMany('spot')
});
