import Ember from 'ember';
import ENV from 'frontend/config/environment';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({
      url: ENV.APP.apiEndpoint + 'api/charities'
    }).then(function(json) {
      return json.data;
    });
  }
});
