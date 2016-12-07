import { test } from 'qunit';
import moduleForAcceptance from 'frontend/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | viewdonors');

test('visiting /dashboard/donors shows a list of donors', function(assert) {
  visit('/dashboard/donors');

  andThen(function() {
    assert.equal(find('.donors').length, 75);
  });
});

test('user can get home from donors page', function(assert) {
  visit('/dashboard/donors');
  click('a');
  andThen(function() {
    assert.equal(currentURL(), '/dashboard/home');
  });
});
