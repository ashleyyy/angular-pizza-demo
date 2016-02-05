'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version', 
  'Controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/pizza', {
      templateUrl: 'partials/all-pizzas.html',
      controller: 'PizzaCtrl'
    })
    .when('/pizza/:pizzaId', {
      templateUrl: 'partials/one-pizza.html',
      controller: 'PizzaDetailCtrl'
    })
    .when('/create', {
      templateUrl: 'partials/make-pizza.html',
      controller: 'CreatePizzaCtrl'
    })
    .otherwise({redirectTo: '/'});
}])

.factory("messages",function(){
        return {};
});;
