// app.js

/**
  @module app
  @main  
*/

import Resolver from 'resolver';
import editTodoView from 'appkit/views/edit_todo';

/**
  Namespace for the whole application.
  
  @class App
  @constructor  
  @extends Ember.Application
*/
var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

Ember.Handlebars.helper('edit-todo', editTodoView);

export default App;
