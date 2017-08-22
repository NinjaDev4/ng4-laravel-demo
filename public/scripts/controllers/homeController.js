/**
 *  @description = Controller for home page
 */ 
ang.registerController('HomeController', function($rootScope, $scope, $location){
    //console.log('home controller');
    $rootScope.path = $location.path();
});