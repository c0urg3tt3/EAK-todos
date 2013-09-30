// controllers/todo.js

/**
  @module app
  @submodule app-controller
*/

/**
  The todo controller (todos item).
  
  @namespace App
  @property TodoController
*/
var TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted'),
  
  isEditing: false,
  
  actions: {
    editTodo: function () {
      this.set('isEditing', true);
    }, 
    removeTodo: function () {
      var todo = this.get('model');
      todo.deleteRecord();
      todo.save();
    },
    acceptChanges: function () {
      this.set('isEditing', false);
      this.get('model').save();
    }
  }
});

export default TodoController;