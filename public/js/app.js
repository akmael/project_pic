angular.module('picApp', []);

angular.module('picApp')
       .controller('picController', picController);

picController.$inject = ['$scope', '$http'];


function picController($scope, $http){



 //array hold photos
 $scope.photos= [];
 console.log(photos);


// search button functionality
$scope.searchTags = function(){
 console.log('button pressed');
  var searchTerms = $scope.search;
  $http.post('/api/photos')
       .then(function(response){
         console.log("i got here")
         console.log(response);

       })
       .catch(function (err){
         console.error(err);
       })


}



}
