import Ember from 'ember';
import ENV from 'frontend/config/environment';

export default Ember.Route.extend({
  actions: {
  sessionChanged: function() {
    this.refresh();
    }
  }
});
