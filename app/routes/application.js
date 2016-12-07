import Ember from 'ember';
import ENV from 'frontend/config/environment';

console.log(ENV.APP.apiEndpoint);

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({
      url: ENV.APP.apiEndpoint + 'api/charities'
    }).then(function(json) {
      return json.data;
    });
  }
});
