// router.js

/**
  @module app
*/

/**
  Router for the whole application.
  
  @namespace App
  @class Router
  @extends Ember.Router
*/
var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.resource('todos', { path: '/' }, function() {
    // additional child routes
    this.route('active');
    this.route('completed');
  });
});

export default Router;
