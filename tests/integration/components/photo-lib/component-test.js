import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('photo-lib', 'Integration | Component | photo lib', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{photo-lib}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#photo-lib}}
      template block text
    {{/photo-lib}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
