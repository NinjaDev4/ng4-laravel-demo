/**
 *  @description = Controller for home page
 */ 
ang.registerController('SigninController', function($rootScope, $scope, $location, $http, $window,$cookies){
    $rootScope.path = $location.path();

    $scope.showSignin = true;
    $scope.showSignup = true;

    $scope.user = {};
    $scope.signin_url = "/api/sign-in";
    $scope.signup_url = "/api/sign-up";
    $scope.errorMessage = false;

    $scope.openSignupForm = function(){
    	$scope.showSignin = false;
    	$scope.showSignup = false;
    };
    $scope.openSigninForm = function(){
    	$scope.showSignin = true;
    	$scope.showSignup = true;
    };

    $scope.loginFormSubmit = function() {

        var url =  API_URL+$scope.signin_url;

        $http({
		  method: 'POST',
		  url: url,
		  data: $scope.user
		}).then(function successCallback(response) {
            if(response.data.success){
	            $cookies.put('token', response.data.token);
	            var token_key = $cookies.get('token');
	            if(token_key){
	            	$window.location.href = '/home';
	            }

	        }
		  }, function errorCallback(response) {
		    $scope.errorMessage = true;
		});

    };

    $scope.signupFormSubmit = function() {

        var url =  API_URL+$scope.signup_url;

        $http({
		  method: 'POST',
		  url: url,
		  data: $scope.user
		}).then(function successCallback(response) {
			console.log(response);
            if(response.data.success){
            	$scope.showSignin = true;
				$scope.showSignup = true;

	        }
		  }, function errorCallback(response) {
		    $scope.errorMessage = true;
		});

    };

    
    
});