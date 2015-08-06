angular.module("gorilla.app")

.controller("listController", ["$scope", "service", function($scope, service) {
  $scope.profiles = [];

  service.getProfiles().success(function(data) {
    $scope.profiles = data;
  });

  $scope.remove = function(index) {
    service.remove(index).success(function() {
      $scope.profiles.splice(index, 1);
    })
  }
}]);
