// import DS from 'ember-data';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

  export default Model.extend({
    user: belongsTo('user'),
    name: attr('string'),
    address: attr('string'),
    city: attr('string'),
    state: attr('string'),
    zip: attr('string'),
    description: attr('string'),
    tag: attr('string'),
    photos: hasMany('photo'),
    uploads: hasMany('upload')
  });
