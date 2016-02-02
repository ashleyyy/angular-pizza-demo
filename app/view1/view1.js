'use strict';

angular.module('myApp.view1', ['ngRoute'])

//route
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

//service for GET /pizzas
.factory('pizzas', ['$http', function($http) { 
  return $http.get('http://localhost:8080/pizza') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])

//controller to provide array of pizzas to view1.html
.controller('View1Ctrl', ['$scope', 'pizzas', function($scope, pizzas) {
  pizzas.success(function(data) {
    $scope.pizzas = data;
  })
}]);
