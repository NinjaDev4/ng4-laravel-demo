/**
 *  @description = Header controller.
 */ 
ang.controller('HeaderCtrl', function ($scope, $rootScope,  $anchorScroll, $timeout, $location, $window) {
    
	$rootScope.path = $location.path();

	$scope.class = '';

	$scope.loggedIn = false;
	if( $rootScope.path != '/sign-in' ){
		$scope.loggedIn = true;
	}
});