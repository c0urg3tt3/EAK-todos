import Resolver from 'resolver';

/**
  @module app
  @main  
*/

/**
  Namespace properties and methods 
  for the whole application.
  
  @module app
  @property App
  @constructor  
*/
var App = Ember.Application.extend({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  Resolver: Resolver
});

export default App;
