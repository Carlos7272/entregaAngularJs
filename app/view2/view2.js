'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', function($scope, $http) {
	$scope.importe;
	$scope.taza; 
	$scope.cuota;	
    $scope.total;

    $scope.provincias = [];
    $http.get("https://raw.githubusercontent.com/dariosus/jsonProvincias/master/provincias.json").then(function(res) {
    	$scope.provincias = res.data;
    });

    $scope.calcular = function(){
        if ($scope.importe == null || $scope.taza == null || $scope.cuota == null)
            alert("Complete todos los campos");
        else
           $scope.total = ($scope.importe/100) * $scope.taza;
        };
    $scope.borrar = function(){
        $scope.importe = "";
        $scope.taza = ""; 
        $scope.cuota = "";   
        $scope.total = "";   
    } 
  });