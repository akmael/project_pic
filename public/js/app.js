
angular.module('picApp', ['angular-loading-bar', 'ngAnimate','ui.bootstrap']);


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
         console.log("searching for photos now ");
         $scope.photos = response.data.photos.photo;


       })
       .catch(function (err){
         console.error(err);
       })


}
//request for search by click of image
$scope.cameraInfo = function(photo){

 $http.post('api/photos/camera/'+photo.id)
           .then(function(response){
             console.log("retriving info");
             $scope.info = response.data.photo.camera;


           });

}



}
