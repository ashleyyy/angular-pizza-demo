'use strict';

angular.module('Controllers', ['ngRoute'])


.factory('PizzaFactory', function($resource) {
  return $resource('http://localhost:8080/pizza/:id'); // Note the full endpoint address
})

.controller('PizzaCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('http://localhost:8080/pizza') 
            .success(function(data) { 
              $scope.pizzas = data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])

.controller('PizzaDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $http.get('http://localhost:8080/pizza/'+$routeParams.pizzaId)
    .success(function(data) { 
      $scope.pizza = data; 
    }) 
    .error(function(err) { 
      return err; 
    });
}])

.controller('ToppingCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
  $http.get('http://localhost:8080/topping') 
            .success(function(data) { 
              $scope.toppings = data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 

  // $scope.selection = [];

  // $scope.$watch('toppings|filter:{selected:true}', function (nv) {
  //   $scope.selection = nv.map(function (topping) {
  //     return topping;
  //   });
  // }, true);
}])

.controller('CreatePizzaCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
  
    $scope.pizza = {
      "name": "",
      "price": null,
      "toppings": []
    };

  $scope.submit = function() {
    // debugger
    console.log($scope.pizza.toppings);
    var toppingsArray = $scope.pizza.toppings.map(function (topping) {
      return JSON.parse(topping);
    });

    console.log(toppingsArray);

  
    var data = {
            "name": $scope.pizza.name,
            "price": $scope.pizza.price,
            "toppings": toppingsArray
          };
  

    $http.post('http://localhost:8080/pizza/', data)
              .success(function(data, status, headers, config) {
                // $scope.message = data;
                console.log('success');
               })
              .error(function(err) { 
              return err; 
               }); 
            };
    $scope.name='';
    $scope.price='';

}])

// .controller('CreatePizzaCtrl',function($scope, PizzaFactory) {
//   $scope.submit = function() {
//     console.log('submit works?');
  

//   $scope.pizza = new PizzaFactory(); //You can instantiate resource class

//   $scope.pizza.name = $scope.name;
//   $scope.pizza.price = $scope.price;
//   console.log("scope.pizza " + $scope.pizza)


//   PizzaFactory.save($scope.pizza, function() {
//     //data saved. do something here.
//     console.log('success');
//   }); //saves an entry. Assuming $scope.entry is the Entry object  
// }
// })

.controller('ToppingDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
  $http.get('http://localhost:8080/topping/'+$routeParams.toppingId)
    .success(function(data) { 
      $scope.topping = data; 
    }) 
    .error(function(err) { 
      return err; 
    });
}])
;

