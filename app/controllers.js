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
}]);