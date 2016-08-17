var request = require('request');
var http= require('http');


  module.exports = (function(app) 
  {
    return{

      show: function(req, res)
      {
          console.log("m i in here?")
          var states_data = {};
          var url = 
          {
            host: 'https://quickstats.nass.usda.gov/api/api_GET/?key=657A7402-DF3A-3C12-A7D6-FFCC1DDE180D&format=json&year=2015&commodity_desc=SOYBEANS&statisticcat_desc=PRODUCTION&agg_level_desc=STATE&unit_desc=BU&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES&reference_period_desc=YEAR',
            json: true,
          }
          request(url.host, function(err, response, body) 
                    {
                      var state_productions = [];
                      var api_response = JSON.parse(body, function(k, v) 
                                        {
                                            if (k=="state_name" || k=='Value') 
                                            {
                                              state_productions.push(v)
                                            }
                                            return state_productions
                                        });
                      states_data = { data: api_response };
                      res.json(states_data);
                    });

  		},

      show_counties: function(req, res)
      {
          var counties_data = {};
          var url = 
          {
            host: 'https://quickstats.nass.usda.gov/api/api_GET/?key=657A7402-DF3A-3C12-A7D6-FFCC1DDE180D&format=json&state_name='+req.body.name+'&year=2015&commodity_desc=SOYBEANS&statisticcat_desc=PRODUCTION&agg_level_desc=COUNTY&unit_desc=BU&prodn_practice_desc=ALL%20PRODUCTION%20PRACTICES&reference_period_desc=YEAR',
            json: true,
          }
          request(url.host, function(err, response, body) 
                    {
                      var counties_names = [];
                      var api_response = JSON.parse(body, function(k, v) 
                                        {
                                           if (k=="county_name" && v!=="OTHER (COMBINED) COUNTIES")
                                            {
                                               counties_names.push(v)
                                            }
                                            return counties_names
                                        });
                      counties_data = {data: api_response};
                      res.json(counties_data)
                    });
      },

  }
})();









