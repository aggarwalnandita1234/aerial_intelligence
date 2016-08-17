soybean_app.controller('statesController', ['$scope', 'StateFactory','$location', '$http' ,function($scope, StateFactory, $location, $http )
{
            var array1 = [];
			$scope.enterUser = function()
			{
				  		$location.url('/go_to_states')
	  		}
	  		StateFactory.index_state(function(state_productions)
	  		{
				var states = [];
				var productions = []
			 	for (i = 0; i<state_productions.data.length; i=i+2)
			 	{
		 			states.push(state_productions.data[i]);
		 			productions.push(state_productions.data[i+1])
				}
		  		$scope.states = states;
		  		var int_productions = [];
		  		for (index in productions)
		  		{
		  			var str_without_comma = (productions[index].split(',')).join("");
		  			int_productions.push(Number(str_without_comma));
		  			console.log(str_without_comma, int_productions)
		  		}
		  		$scope.productions = int_productions;
			})

	  		$scope.enterSelection = function()
	  		{
				console.log("Selected state:", $scope.state);
		  		StateFactory.index_county($scope.state, function(counties_names)
		  		{
  					$scope.counties_rains = []
	  				console.log("county data should be", counties_names.data)
	  				for (index in counties_names.data)
	  				{
  						console.log(counties_names.data[index], $scope.state.name)
				  		var url = "http://api.openweathermap.org/data/2.5/weather?q="+counties_names.data[index]+","+$scope.state.name+"&appid=47521c561e87f14aedc9be6469d7968c"
				  		$http.post(url).then(function(rain_data)
		  					{
		  						console.log("rain_data is", rain_data)
					  			$scope.counties_rains.push(rain_data.data);
		  						return (rain_data.data)
					  		});  
					}


				});
	  		}



}])
