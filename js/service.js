angular.module("gorilla.app")

.service('service', ["$http", function($http){
  this.addProfile = function(profile){
    return $http.post("/api/add.php", profile);
  }

  this.remove = function(id) {
    return $http.post("/api/delete.php", id);
  }

  this.getProfiles = function(){
    return $http.get("/api/list.php")
         .error(function() {
           alert("error");
         });
  }
}])
