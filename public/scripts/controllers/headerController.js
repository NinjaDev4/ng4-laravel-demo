/**
 *  @description = Header controller.
 */ 
ang.controller('HeaderCtrl', function ($scope, $rootScope,  $anchorScroll, $timeout, $location, $window) {
    
	$rootScope.path = $location.path();
  
});