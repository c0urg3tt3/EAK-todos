// routes/todos/completed.js

/**
  @module app
  @submodule app-route
*/

/**
  The todos completed route.
  
  @namespace App
  @class TodosCompletedRoute
  @extends Ember.Route
*/
var TodosCompletedRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function (todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

export default TodosCompletedRoute;
