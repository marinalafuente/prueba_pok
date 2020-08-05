(function(){


var app = angular.module ('myApp', []);
app.controller('apiController', function($scope, $http){


  // $scope.buscar = function(){
  //   $http({
  //     method: 'GET',
  //     url: 'https://pokeapi.co/api/v2/pokemon/'
  //     }).then(function successCallback(response, data, status, headers, config) {

            // $http.get('https://pokeapi.co/api/v2/pokemon/'+ $scope.id)
            // .then(function(res){
            //   var pokemon = res.data.name;
            //   $scope.pokemonNames.push(pokemon);
            // });


          // $scope.pokemons.forEach(function(response, data){
          //       $http.get('https://pokeapi.co/api/v2/pokemon/')
          //            .then(function(response, data) {
          //                $scope.pokemons.push(response.data.name);
          //             });
          //     });
        

          // $scope.name = response.data.name;
          // $scope.id = response.data.id;
          // $scope.orden = response.data.base_experience;
          // $scope.heigt = response.data.height;
          // $scope.image = response.data.sprites.front_default;

  //     }, function errorCallback(response, data, status, headers, config) {
  //      alert("This pokemon is unknown even at his home");
  //   });

  // };


  function randomInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    $scope.pokemons = [];
    
    /////////////
    
    function getPokeEndpoints(){
      var i;
      var endpoints = [];
      for (i = 0; i < 2; i++){
        var random = randomInteger(1, 251); // First and second generation pokemon, 1996 - 2002
        var endPoint = '//pokeapi.co/api/v2/pokemon/' + random;
        endpoints.push(endPoint);
      }
      return endpoints;
    }
    
    ///////////// 
    
    function getStats(endPoint){
        $http.get(endPoint)
          .then(function(res){
            $scope.pokemons.push(res.data);
            console.log("pokemonName = " + $scope.pokemonName);
        });
    }
    
    /////////////
    
    function getPokemons(endpoints){
      var i;
      for (i = 0; i < endpoints.length; i++){
        getStats(endpoints[i]);
      }
    }
    
    /////////////
    

    getPokemons(getPokeEndpoints());

  

});





// app.directive('productTitle', function(){
// 	return {
// 		restrict: 'AE',
// 		templateUrl: 'templates/product-title.html'
// 	};
// });

// app.directive('productPanel', function(){
// 		return{
// 			restrict: 'AE',
// 			templateUrl: 'templates/product-panel.html',
// 			controller: function(){

// 			},
			
// 		};
// });


})();
