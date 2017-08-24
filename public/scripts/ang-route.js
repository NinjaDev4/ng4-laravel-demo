ang.run(['$rootScope', '$window', 'authProvider', function ($rootScope, $window,     authProvider) {
    $rootScope.$on('$routeChangeStart', function (next, current) {
        if (!authProvider.isLoggedIn() && current.$$route.originalPath != '/sign-in'){
          $window.location.href = '/sign-in';
        }
        else {
          //console.log('ALLOW');
        }
    });
}])

ang.factory('authProvider', ['$cookies', function($cookies) {
    var user = $cookies.get('token');
      return {
        setUser : function(aUser){
          user = aUser;
        },
        isLoggedIn : function(){
          return(user)? user : false;
        }
    };
}]);

/** All registered Routes for the website : findstartgrow */
ang.config(function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $provide) {

     /* Register controllers and services to load when required */
    ang.registerController = $controllerProvider.register;
    ang.registerDirective = $compileProvider.directive;
    ang.registerService = $provide.service;


    ang.resolveScriptDeps = function(dependencies) {
        return function($q, $rootScope) {
            var deferred = $q.defer();

            $script(dependencies, function() {
                $rootScope.$apply(function() {
                    deferred.resolve();
                });
            });

            return deferred.promise;
        };
    };

    $routeProvider
        .when('/sign-in',
        {
            templateUrl: 'partials/sign-in.html',
            controller: 'SigninController',
            resolve: {
                deps: ang.resolveScriptDeps([
                    'scripts/controllers/signinController.js'
                ]),
                //notLoggedIn: onlynotLoggedIn
            }
        })
        .when('/home',
        {
            templateUrl: 'partials/home.html',
            controller: 'HomeController',
            resolve: {
                deps: ang.resolveScriptDeps([
                    'scripts/controllers/homeController.js'
                ])
            }
        })
        .otherwise( { redirectTo: '/sign-in' } );
         


    /* use the HTML5 History API */
    $locationProvider.html5Mode(true);

    // var onlynotLoggedIn = function($q, $cookies, $window){
    //     var deferred = $q.defer();

    //     var hasCookie = $cookies.getObject('token');
    //     if (!hasCookie) {
    //         deferred.resolve();
    //     } else {
    //         deferred.reject();
    //         $window.location.href = '/sign-in';
    //     }
    //     return deferred.promise;
    // }

});


