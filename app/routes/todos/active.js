// routes/todos/active.js

/**
  @module app
  @submodule app-route
*/

/**
  The todos active route.
  
  @namespace App
  @property TodosActiveRoute
*/
var TodosActiveRoute = Ember.Route.extend({
  model: function(){
    return this.store.filter('todo', function (todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller){
    this.render('todos/index', {controller: controller});
  }
});

export default TodosActiveRoute;
