import DS from 'ember-data';

export default DS.Model.extend({
  file_name: DS.attr('string'),
  photo_upload_url: DS.attr('string'),
  photo: DS.belongsTo('photo')
});
