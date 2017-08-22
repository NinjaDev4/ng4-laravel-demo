/** All registered Routes for the website : findstartgrow */
ang.config(function($routeProvider, $httpProvider, $locationProvider, $controllerProvider, $compileProvider, $provide) {

     /* Register controllers and services to load when required */
    ang.registerController = $controllerProvider.register;
    ang.registerDirective = $compileProvider.directive;
    ang.registerService = $provide.service;


    ang.resolveScriptDeps = function(dependencies) {
        return function($q, $rootScope) {
            var deferred = $q.defer();

            $script(dependencies, function() {
                $rootScope.$apply(function() {
                    deferred.resolve(); // all dependencies have now been loaded by $script.js so resolve the promise
                });
            });

            return deferred.promise;
        };
    };

    $routeProvider
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
        .when('/link',
        {
            templateUrl: 'partials/link.html',
            controller: 'LinkController',
            resolve: {
                deps: ang.resolveScriptDeps([
                    'scripts/controllers/linkController.js'
                ])
            }
        })
        .otherwise( { redirectTo: '/' } );
         


    /* use the HTML5 History API */
    $locationProvider.html5Mode(true);

});


