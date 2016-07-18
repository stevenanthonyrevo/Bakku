

console.log('View app.js document for details on how Bakku functions')
    //http://rest-service.guides.spring.io/greeting
    function Hello($scope, $http) {
    $http.get('http://192.168.0.7:3030/animes').
        success(function(data) {
            $scope.greeting = data;
            console.log(data)
            str = JSON.stringify(data, null, 4);
            console.log(str)
            console.log(data.data)
            console.log(data.data[0])
            console.log(data.data[0].title)
        });
} 

var angapp = angular.module("ng-app", []);

angapp.controller("myDisplay", function($scope,$http,$timeout) {

$scope.yourChoice = 'title';


//view refresher for table 
$scope.reload = function () {
      $http.get('http://192.168.0.7:3030/animes').
        success(function(data) { 
            $scope.items = data.data
            // console.log(data)
        });
 $timeout(function(){
      $scope.reload();
    },150)
  };

  $scope.reload();

});



angapp.controller("actions", function($scope,$http) {

  $scope.delete = function () {
      $http.delete('http://192.168.0.7:3030/animes').
        success(function(data) { 
            $scope.items = data.data
            console.log("All Date should be Deteled" + data)
        });

  };

  $scope.deletebutton = function () {
      // set up button, then delete all api in anime
      $scope.delete();

  };

});



// angapp.controller("options", function($scope) {
//         $scope.testitems = [{
//           value: 'title',
//           text: 'Anime Title'
//         }, {
//           value: 'dvds',
//           text: 'Dvds'
//         }];
//     });



// angapp.controller("mySubmit", function($scope, $http) {
//       $scope.go = function() {
//             $http.get('http://192.168.0.7:3030/animes').
//                 success(function(data) { 
//                     $scope.items = data.data
//                     console.log('data')
//                 });
//       }
// });

