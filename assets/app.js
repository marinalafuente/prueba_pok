(function(){
'use strict'

var app = angular.module ('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/pokemon/:id', {
      templateUrl: '/views/card.html',
      controller: 'apiController'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode();
});

app.controller('apiController', function($scope, $http){

  $scope.buscar = function(){
    $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/'+ $scope.name
      }).then(function successCallback(response, data, status, headers, config) {

          // $scope.pokemons.forEach(function(response, data){
          //       $http.get('https://pokeapi.co/api/v2/pokemon/'+ $scope.name)
          //            .then(function(response, data) {
          //                $scope.pokemons.push(response.data.name);
          //             });
          //     });
          $scope.name = response.data.name;
          $scope.id = response.data.id;
          $scope.image = response.data.sprites.front_default;
          $scope.type = response.data.types.type;


      }, function errorCallback(response, data, status, headers, config) {
       alert("This pokemon is unknown even at his home");
    });

  };

});


//showing random pokemon every time the page is reloaded

app.controller('randomController', function($scope, $http){

function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    $scope.pokemons = [];
    
    function getPokeEndpoints(){
      var i;
      var endpoints = [];
      for (i = 0; i < 12; i++){
        var random = randomInteger(1, 960); 
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

});

// app.controller('cardController', function($scope, $http){

// });




})();
