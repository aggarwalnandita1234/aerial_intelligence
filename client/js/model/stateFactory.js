		soybean_app.factory('StateFactory', function($http) 
		{
			var factory = {};
			var states = [];

			factory.index_state = function(callback) 
			{
				$http.get('/states').success(function(state_productions)
				{
					callback(state_productions);
				});

			}

			factory.index_county = function(selected_state, callback) 
			{
				$http.post('/counties', selected_state).success(function(counties_names)
				{
					callback(counties_names);
				});

			}

			return factory;

		});