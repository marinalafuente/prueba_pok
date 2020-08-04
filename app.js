(function(){


// var app = angular.module ('pokeApi', []);
// app.controller('apiController', function($scope, $http){

//   $scope.buscar = function(){
//     $http({
//       method: 'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon/'+$scope.name
//       }).then(function successCallback(response, data, status, headers, config) {

//           $scope.pokemons = response.data;

//           $scope.name = response.data.name;
//           $scope.id = response.data.id;
//           $scope.orden = response.data.base_experience;
//           $scope.heigt = response.data.height;
//           $scope.image = response.data.sprites.front_default;

//       }, function errorCallback(response) {
//        alert("This pokemon is unknown even at his home");
//     });

//   };
  
// });

var app = angular.module ('pokeApi', []);
app.controller('apiController', function($scope, $http){

  $scope.buscar = function(){
    $http({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/'+ $scope.name
      }).then(function successCallback(response, data, status, headers, config) {

          $scope.pokemons = response.data;

          $scope.name = response.data.name;
          $scope.id = response.data.id;
          $scope.orden = response.data.base_experience;
          $scope.heigt = response.data.height;
          $scope.image = response.data.sprites.front_default;

      }, function errorCallback(response) {
       alert("This pokemon is unknown even at his home");
    });

  };
  
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
