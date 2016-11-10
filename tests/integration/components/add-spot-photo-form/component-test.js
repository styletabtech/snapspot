import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-spot-photo-form', 'Integration | Component | add spot photo form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-spot-photo-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#add-spot-photo-form}}
      template block text
    {{/add-spot-photo-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
