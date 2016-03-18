angular.module('picApp', [

]);

angular.module('picApp')
       .contorller('picController', picController);

picController.$inject = ['$scope', '$http'];


function picController($scope, $http){
 //array hold photos
 $scope.photos= [];

// search button functionaility
$scope.searchTags = function(){
  

}



}
