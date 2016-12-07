import Ember from 'ember';
import ENV from 'frontend/config/environment';

export default Ember.Route.extend({
  activate: function() {
    this._super();
    Ember.$('body').attr('class', this.routeName.replace(/\./g, '-').dasherize());
  },
  model: function() {
    return Ember.$.ajax({
      url: ENV.APP.apiEndpoint + 'api/charities'
    }).then(function(json) {
      return json.data;
    });
  }
});
