import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | viewcharities');

test('visiting /dashboard/charities shows a list of charities', function(assert) {
  visit('/dashboard/charities');

  andThen(function() {
    assert.equal(find('.charities').length, 22);
  });
});
