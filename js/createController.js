angular.module("gorilla.app")

.controller("createController", ["$scope", "service", "$location", function($scope, service, $location) {
  $scope.profile = {
    name: "",
    male: false
  };

  $scope.add = function() {
    if ($scope.profile.name.length == 0) {
      alert("precisa de um nome!");
      return;
    }

    var copy = angular.copy($scope.profile);
    service.addProfile(copy).success(function() {
      $location.path("/");
    });
  }
}]);
