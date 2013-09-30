// adapters/application.js

/**
  @module app
  @submodule app-adapter
*/

/**
  The default App store adapter.
  
  @namespace App
  @class ApplicationAdapter
  @extends DS.FixtureAdapter
*/
var ApplicationAdapter = DS.FixtureAdapter.extend({
    latency: 1000
});

export default ApplicationAdapter;