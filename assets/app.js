(function(){
'use strict'

var app = angular.module ('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'assets/home.html'
    })
    .when('/pokemon/:id', {
      templateUrl: 'assets/card.html'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode();
    $locationProvider.hashPrefix('');
});

//showing random pokemon every time the page is reloaded

app.controller('randomController', function($scope, $http, $routeParams){

  $scope.id = $routeParams.id;

  function displayPok(){
    var endPoint = 'https://pokeapi.co/api/v2/pokemon/' + $scope.id;
        $http.get(endPoint)
          .then(function(res){
            $scope.pokemon = res.data; 
        });
          return $scope.pokemon;
  }
  displayPok();
  

function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    $scope.pokemons = [];
    
    function getPokeEndpoints(){
      var i;
      var endpoints = [];
      for (i = 0; i < 12; i++){
        var random = randomInteger(1, 960);  //aprox max num of pokemons in api
        var endPoint = 'https://pokeapi.co/api/v2/pokemon/' + random;
        endpoints.push(endPoint);
      }
      return endpoints;
    }
    
    function getStats(endPoint){
        $http.get(endPoint)
          .then(function(res){
            $scope.pokemons.push(res.data);
            
        });
    }

    function getPokemons(endpoints){
      var i;
      for (i = 0; i < endpoints.length; i++){
        getStats(endpoints[i]);
      }
    }

    getPokemons(getPokeEndpoints());

//input for name filtering
//better solution with a custom filter

    $scope.buscar = function(){
    $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/'+ $scope.name
      }).then(function successCallback(response, data, status, headers) {

        if ($scope.name == response.data.name){
         $scope.pokemons.unshift(response.data);
        }

      }, function errorCallback(response, data, status, headers) {
       alert("This pokemon is unknown even at his home");
      });

    };

//get info about evolution tree 

  /*var getEvolution = function(id){
      $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon-species/'+ $scope.id
      }).then(function successCallback(response, data, headers) {

         $scope.evolution = response.data.evolves_from_species.name;

      }, function errorCallback(response, data, headers) {
         alert("Error");
      });
    }
    getEvolution();*/


});



})();
