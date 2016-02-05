'use strict';

angular.module('Controllers', ['ngRoute'])

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
}])

.controller('CreatePizzaCtrl', ['$scope', '$http', '$filter', '$location', function($scope, $http, $filter, $location) {
  
  $scope.pizza = {
      "name": "",
      "price": null,
      "toppings": []
  };

  $scope.resetForm = function() {
      $scope.pizza = {
        "name": "",
        "price": null,
        "toppings": []
      };
      $scope.makePizzaForm.$setPristine();
  };

  $scope.submit = function(isValid) {
    
    var toppingsArray = $scope.pizza.toppings.map(function (topping) {
      return JSON.parse(topping);
    });

    var data = {
            "name": $scope.pizza.name,
            "price": $scope.pizza.price,
            "toppings": toppingsArray
          };

      $http.post('http://localhost:8080/pizza/', data)
                .success(function(data, status, headers, config) {
                  console.log('success');
                  $scope.messages = 'some text';
                  $location.path('/pizza/');
                 })
                .error(function(err) { 
                return err; 
                 }); 
       // TODO: reset form on submit         
      $scope.makePizzaForm.$setPristine();

  };



}])

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

