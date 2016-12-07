import Ember from 'ember';

export default Ember.Controller.extend({
  total: Ember.computed('model', function() {
    var transactions = this.get('model');
    var total = 0;
    transactions.forEach(function(transaction) {
      total += parseFloat(transaction.total_amount);
    });
return Math.round(total * 100) / 100;
  // console.log(this.get('model.total_amount'));
})
});
