'use strict';
ang.registerDirective('modal', function($q, $http, $rootScope, $cookies, $timeout, $filter,$window){
    return{
     restrict: 'EA',
     transclude: true,
     replace: true,
     scope: true,
     templateUrl: 'partials/exportModal.html',
     link:function(scope, element, attrs) {
                  
        }
    }
})
