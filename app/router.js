
var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function(){
  this.resource('todos', { path: '/' });
});

export default Router;
