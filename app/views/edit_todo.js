// views/edit_todo.js

/**
  @module app
  @submodule app-view
*/

/**
  The edit todo view.
  
  @namespace App
  @property EditTodoView
*/
var EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

export default EditTodoView;