'use strict';


var app = angular.module('routage', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/Synthese', {templateUrl:'features/synthese.html'})
    .when('/Virement', {templateUrl:'features/virement.html'})
    //.otherwise({templateUrl:'index.html'})
    ;
}]);

