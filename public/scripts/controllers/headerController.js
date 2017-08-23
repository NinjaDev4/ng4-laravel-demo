/**
 *  @description = Header controller.
 */ 
ang.controller('HeaderCtrl', function ($scope, $rootScope,  $anchorScroll, $timeout, $location, $window, $cookies, $http) {
    
	$rootScope.path = $location.path();
	$scope.base_url = "/api/sign-out";
	$scope.loggedIn = false;
	var token_key = $cookies.get('token');

	if( $rootScope.path == '/sign-in' || $rootScope.path == '/'){
		$scope.loggedIn = false;
	}
	else{
		$scope.loggedIn = true;
	}


	$scope.logout = function (){
		if(token_key){
			var url =  API_URL+$scope.base_url;
			var token={'token':token_key};
	        $http({
			  method: 'POST',
			  url: url,
			  data: token
			}).then(function successCallback(response) {
				console.log(response);
	            if(response.data.success){
	            	$cookies.remove('token');
		            $window.location.href = '/sign-in';
		        }
			  }, function errorCallback(response) {
			    console.log(response);
			});
		}

	};
});