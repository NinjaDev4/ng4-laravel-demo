/**
 *  @description = Controller for home page
 */ 
ang.registerController('HomeController', function($rootScope, $scope, $location,$http,$cookies){
    $rootScope.path = $location.path();
    $scope.quote = {};
    $scope.eQuote = {};
    $scope.onSuccess = true;
    $scope.onDelete = true;
    $scope.quoteAction = true;
    var token = $cookies.get('token');

    // Add quotes
    $scope.add_url = "/api/add-quote?token="+token;

    $scope.submitAddQuote = function (){
        var url = API_URL + $scope.add_url;
        $http({
            method: 'POST',
            url: url,
            data: $scope.quote
        }).then( function successCallback(response) {
            $scope.onSuccess = false;
            $scope.onDelete = true
            $scope.quote = {};
            $scope.getquotes();
        }, function errorCallback(response) {
            $scope.onSuccess = true;
            console.log('err: '+response);
        });
    }

    // Get quotes
    $scope.get_url = "/api/get-quotes?token="+token;

    $scope.getquotes = function(){
        var url = API_URL + $scope.get_url;
        $http({
            method: 'GET',
            url: url
        }).then( function successCallback(response){
            $scope.quotes = response.data.data;
        }, function errorCallback(response) {
            console.log('err: '+response);
        });
    }

    // Edit quotes
    $scope.editQuote = function(quote){
        $scope.eQuote = quote;
        $scope.quoteAction = false;
        $scope.onSuccess = true;
        $scope.onDelete = true;
    }

    $scope.submitEditQuote = function(){
        var url = API_URL + "/api/edit-quote/"+$scope.eQuote.id+"?token="+token;
        $http({
            method: 'PUT',
            url: url,
            data: $scope.eQuote
        }).then( function successCallback(response){
            $scope.quoteAction = true;
            $scope.getquotes();
        }, function errorCallback(response) {
            console.log('err: '+response);
        });
    }

    // Delete quotes
    $scope.deleteQuote = function(id) {
        $scope.del_url = "/api/delete-quote/"+id+"?token="+token;
        var url = API_URL + $scope.del_url;
        $http({
            method: 'DELETE',
            url: url
        }).then( function successCallback(response){
            $scope.onDelete = false;
            $scope.onSuccess = true;
            $scope.getquotes();
        }, function errorCallback(response) {
            $scope.onDelete = true;
            console.log('err: '+response);
        });
    }
});