
angular.module('picApp', ['angular-loading-bar', 'ngAnimate','ui.bootstrap.modal']);


angular.module('picApp')
       .controller('picController', picController);

picController.$inject = ['$scope', '$http'];


function picController($scope, $http){
    $showModal = false;
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
            $scope.showModal= true;
           $http.post('api/photos/camera/'+photo.id)
                     .then(function(response){
                       console.log("retriving info");
                       $scope.info = response.data.photo.camera;
                       console.log(response.data)

                     });
            $http.post('/api/photos/xinfo'+photo.id )
                    .then(function(response){
                      console.log("searching for photos now ");
                      $scope.source = response.data.sizes.size[6];
                      console.log($scope.source);

                   });
    $scope.ok = function(){

        $scope.showModal = false;
    }
    $scope.cancel= function(){
        $scope.showModal =false;
    }



}

}
