/**
 *  @description = Controller for home page
 */ 
ang.registerController('HomeController', function($rootScope, $scope, $location){
    //console.log('home controller');
    $rootScope.path = $location.path();

    $scope.getquotes = true;
    $scope.addquotes = true;
    $scope.editquotes = true;

    $scope.openGetquotes = function(){
    	$scope.getquotes = true;
    	$scope.addquotes = true;
   		$scope.editquotes = true;
    }
    $scope.openAddquotes = function(){
    	$scope.getquotes = false;
    	$scope.addquotes = false;
   		$scope.editquotes = true;
    }
    $scope.openEditquotes = function(){
    	$scope.getquotes = false;
    	$scope.addquotes = true;
   		$scope.editquotes = false;
    }
});