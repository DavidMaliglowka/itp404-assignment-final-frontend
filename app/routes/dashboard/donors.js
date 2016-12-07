import Ember from 'ember';
import ENV from 'frontend/config/environment';

export default Ember.Route.extend({
  model: function() {
    return Ember.$.ajax({
      url: 'http://localhost:5000/api/donors'
    }).then(function(json) {
      return json.data;
    });
  }
});
