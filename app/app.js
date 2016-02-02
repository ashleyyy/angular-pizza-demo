'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version', 
  'Controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/pizzas', {
      templateUrl: 'partials/all-pizzas.html',
      controller: 'PizzaCtrl'
    })
    .when('/pizzas/:pizzaId', {
      templateUrl: 'partials/one-pizza.html',
      controller: 'PizzaDetailCtrl'
    })
    .otherwise({redirectTo: '/'});
}]);
