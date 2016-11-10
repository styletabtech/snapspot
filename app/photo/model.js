import DS from 'ember-data';

export default DS.Model.extend({
  // file_name: DS.attr('string'),
  // photo_upload_url: DS.attr('string'),
  // spot: DS.belongsTo('spot'),
  user: DS.belongsTo('user', {
    inverse: 'photos'
  }),
  spot: DS. belongsTo('spot', {
    inverse: 'photos'
  }),
  upload: DS.belongsTo('upload', {
    inverse: 'photos'
  })
});
