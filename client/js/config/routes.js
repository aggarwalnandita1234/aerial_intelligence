
    soybean_app.config(function ($routeProvider) {
      
      $routeProvider

            .when('/',{
                templateUrl: './../partials/view1.html',
            })
            .when('/go_to_states',{
                templateUrl: './../partials/state.html',
            })
            
            .otherwise({
              redirectTo: '/'
            });
    });