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

.directive('ngConfirmClick', [function(){
    return {
      link: function (scope, element, attr) {
        var msg = attr.ngConfirmClick || "Are you sure?";
        var clickAction = attr.confirmedClick;
        element.bind('click',function (event) {
          if ( window.confirm(msg) ) {
            scope.$eval(clickAction)
          }
        });
      }
    };
}]);

$(function() {

  $(document).on( "click", "#editPizzaButton", function(e) {
    e.preventDefault();
    $('#editPizzaForm').toggleClass('hidden');
  });

  $(document).on( "click", "#saveEditButton", function(e) {
    e.preventDefault();
    $('#editPizzaForm').toggleClass('hidden');
  });

});