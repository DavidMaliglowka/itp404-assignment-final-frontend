import Ember from 'ember';
import ENV from 'frontend/config/environment';

export default Ember.Controller.extend({
actions: {
  add: function(e) {
    e.preventDefault();
    var name = this.get('organizationName');
    var description = this.get('organizationDescription');
    var category = this.get('category');

    console.log(name, description, category);

    var promise = Ember.$.ajax({
      type: 'post',
      url: ENV.APP.apiEndpoint + 'api/charities',
      data: {
        name: name,
        category: category,
        text: description
      }
    });
    promise.then(() => {
      this.set('name', null);
      this.set('category', null);
      this.set('text', null);
      this.transitionToRoute('dashboard.charities');

    }, function() {
      alert('error');
    });
  }
}
});
