// models/todo.js

/**
  @module app
  @submodule app-model
*/

/**
  The Todo model.
  
  @namespace App
  @class Todo
  @extends DS.Model
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

/**
    @property FIXTURES
    @type {Array}
*/
Todo.FIXTURES = [
  {
    id: "1",
    title: 'install EAK',
    isCompleted: true
  }, {
    id: "2",
    title: 'install additional dependencies',
    isCompleted: true
  }, {
    id: "3",
    title: 'develop amazing things',
    isCompleted: false
  }
];

export default Todo;