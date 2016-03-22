angular.module('picApp', []);

angular.module('picApp')
       .controller('picController', picController);

picController.$inject = ['$scope', '$http'];


function picController($scope, $http){

$scope.photos= [];

// search button functionality
$scope.searchTags = function(){
 console.log('button pressed');
  var searchTerms = $scope.search;
  $http.post('/api/photos', $scope.search )
       .then(function(response){
         console.log("i got here")
         $scope.photos = response.data.photos;
         $scope.photos = response.data.photos.photo;
         console.log($scope.photos)

       })
       .catch(function (err){
         console.error(err);
       })


}



}
