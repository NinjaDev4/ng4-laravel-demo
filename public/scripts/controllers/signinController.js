/**
 *  @description = Controller for home page
 */ 
ang.registerController('SigninController', function($rootScope, $scope, $location){
    $rootScope.path = $location.path();

});