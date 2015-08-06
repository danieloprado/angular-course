angular.module("gorilla.app", ["ngRoute"])
.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {

  $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });

  $routeProvider
      .when("/", {
        templateUrl: "views/list.html",
        controller: "listController"
      })
      .when("/create", {
        templateUrl: "views/create.html",
        controller: "createController"
      })
      .otherwise({ redirectTo: "/" });
}]);
