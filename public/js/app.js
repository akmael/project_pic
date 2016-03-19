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

}



}
