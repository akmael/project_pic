
angular.module('picApp', ['angular-loading-bar', 'ngAnimate']);


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
         console.log($scope.photos)

       })
       .catch(function (err){
         console.error(err);
       })


}
//request for search by click of image
$scope.cameraInfo = function(photo){
  var farm = photo.farm,
     server= photo.server,
     id = photo.id,
     secret= photo.secret
     title = photo.title;

  bootbox.dialog({
    message: "<img class='imgsize pull-right' ng-src='http://farm"+farm+".static.flickr.com/"+server+"/"+id+"_"+secret+"_l.jpg' alt='"+title+"'>",
    title: photo.title,
    size: 'large'
  });
  $http.post('api/photos/camera/'+photo.id)
        .then(function(response){
          console.log("retriving info");
          $scope.info = response.data.photo.camera;
          console.log(response);
        });


}



}
