import Ember from 'ember';
import ENV from 'frontend/config/environment';

console.log(ENV.APP.apiEndpoint);

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({
      url: 'http://localhost:5000/api/charities'
    }).then(function(json) {
      return json.data;
    });
  }
});
