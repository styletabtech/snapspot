import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('spots-gallery/single-spot', 'Integration | Component | spots gallery/single spot', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{spots-gallery/single-spot}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#spots-gallery/single-spot}}
      template block text
    {{/spots-gallery/single-spot}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
