angular.module('videoApp', []);

angular.module('videoApp')
    .controller('videoController', ['$scope', '$http', function($scope, $http){
        $scope.greeting = "Welcome, motherfucker!"
        
//$scope.submissions =[];
$scope.submit = function () {
    $http.post('/submit', $scope.sub)
        .then(function(returnData){
       console.log(returnData); 
        $scope.subs=returnData;
    });
}
        
        
   
        
        
        
        
        
        
    }])










