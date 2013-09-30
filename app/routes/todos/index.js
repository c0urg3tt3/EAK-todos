// routes/todos/index.js

/**
  @module app
  @submodule app-route
*/

/**
  The todos index route.
  
  @namespace App
  @property TodosIndexRoute
*/
var TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

export default TodosIndexRoute;
