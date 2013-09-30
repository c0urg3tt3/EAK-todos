// routes/todos.js

/**
  @module app
  @submodule app-route
*/

/**
  The todos route.
  
  @namespace App
  @class TodosRoute
  @extends Ember.Route
*/
var TodosRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('todo');
    }
});

export default TodosRoute;