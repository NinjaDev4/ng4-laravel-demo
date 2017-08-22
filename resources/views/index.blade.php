<!DOCTYPE html>
<html lang="en" data-ng-app="myApp">
    <head>
        <base href="/">
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
        <title>Laravel Demo</title>
        <link rel="stylesheet" type="text/css" href="../css/bootstrap.min.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" type="text/css" href="../css/style.css">
    </head>

    <body  ng-controller="HeaderCtrl">
        <header ng-show="loggedIn">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <nav class="navbar navbar-default">
                          <div class="container-fluid">
                            <!-- Brand and toggle get grouped for better mobile display -->
                            <div class="navbar-header">
                              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                              </button>
                            </div>

                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav nav">
                              <li class="nav-item" ng-class="path == '/home' ? 'active': ''">
                                <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="/link">Sign Out</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
        <div data-ng-view> 
            <!-- Placeholder for all Views -->
        </div>
    </div> 

        <!-- Footer Section -->
         <!-- End of Footer Section -->

        <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
        <script src="../scripts/loadscripts.js"></script>
           

        <!-- angular js library -->
        <script type="text/javascript" src="../node_modules/angular/angular.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.6.5/angular-route.js"></script>
        <!-- angular js modules -->
        <script type="text/javascript" src="../scripts/ang-module.js"></script>
        <!-- angular js routes -->
        <script type="text/javascript" src="../scripts/controllers/headerController.js"></script>
        <script type="text/javascript" src="../scripts/ang-route.js"></script>
    </body>

</html>