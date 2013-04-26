'use strict';

angular.module('mrpigsApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' })
      .when('/about', { templateUrl: 'views/about.html', controller: 'MainCtrl' })
      .when('/course', { templateUrl: 'views/course.html', controller: 'CourseCtrl' })
      .otherwise({ redirectTo: '/' });
  });

angular.module('mrpigsApp')
    .controller('NavCtrl', function ($scope, $location) {


        $scope.nav = [
            {
                name: "Home",
                href: "#/"
            },
            {
                name: "Learn",
                href: "#/course"
            },
            {
                name: "About",
                href: "#/about"
            }
        ];

        $scope.location = $location;

        $scope.isActiveNav = function (href) {
            if (href == '#' + $location.path()) return "active";
            return false;
        }

    });