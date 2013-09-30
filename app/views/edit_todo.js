// views/edit_todo.js

/**
  @module app
  @submodule app-view
*/

/**
  The edit todo view.
  
  @namespace App
  @class EditTodoView
  @extends Ember.TextField
*/
var EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

export default EditTodoView;