import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('dashboard', function() {
    this.route('donors');
    this.route('home');
    this.route('charities');
    this.route('add');
  });
});

export default Router;
