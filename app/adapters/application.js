// adapters/application.js

/**
  @module app
  @submodule app-adapter
*/

/**
  The default App store adapter.
  
  @namespace App
  @property ApplicationAdapter
*/
var ApplicationAdapter = DS.FixtureAdapter.extend({
    latency: 1000
});

export default ApplicationAdapter;