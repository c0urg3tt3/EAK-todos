// models/todo.js

/**
  @module app
  @submodule app-model
*/

/**
  The Todo model.
  
  @namespace App
  @property Todo
*/
var Todo = DS.Model.extend({
  /**
    @property title
    @type {String}
  */
  title: DS.attr('string'),
  
  /**
    @property isCompleted
    @type {Boolean}
  */
  isCompleted: DS.attr('boolean')
});

export default Todo;