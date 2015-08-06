angular.module("gorilla.app", [])

.controller("profileController", ["$scope", function($scope) {
  $scope.profile = {
    name: "",
      male: false
  };

  $scope.profiles = [{
    "name": "daniel prado",
    "male": true
  }, {
    "name": "maria garcia",
    "male": false
  }];

  $scope.$watch("profile.name", function(value) {
    $scope.message = value ? "com conteudo" : "escreva um nome";
  });

  $scope.$watch("profile", function(value) {
    $scope.messageProfile = new Date();
  }, true);

  $scope.$watchCollection("profiles", function() {
    $scope.lastUpdate = new Date();
  }, true);

  $scope.add = function() {
    if ($scope.profile.name.length == 0) {
      alert("precisa de um nome!");
      return;
    }

    var copy = angular.copy($scope.profile);
    $scope.profiles.push(copy);

    $scope.profile = {
      name: "",
      male: false
    };
  }

  $scope.remove = function(index) {
    $scope.profiles.splice(index, 1);
  }
}]);
