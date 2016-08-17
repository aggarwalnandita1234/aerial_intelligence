
  var states = require('./../controllers/states.js');

  module.exports = function(app) 
  {
  	app.get('/states', function(req, res)
    {
  		states.show(req, res);
    });
    app.post('/counties', function(req, res)
    {
      states.show_counties(req, res);
    });
  
  }