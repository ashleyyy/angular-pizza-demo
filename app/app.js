'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/pizzas', {
      templateUrl: 'partials/all-pizzas.html',
      controller: 'View1Ctrl'
    })
    .when('/pizzas/:pizzaId', {
      templateUrl: 'partials/one-pizza.html',
      controller: 'PizzaDetailCtrl'
    })
    .otherwise({redirectTo: '/'});
}]);
