import DS from 'ember-data';

export default DS.Model.extend({

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
