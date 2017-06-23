;(function () {

    "use strict";

    angular
        .module("myApp")

        .controller("ScopeWithoutApply", function ($scope) {

            $scope.getMessage = function () {
                setTimeout(function () {
                    $scope.message = 'Fetched after 3 seconds';
                    console.log($scope.message);
                }, 3000);
            };

            $scope.getMessage();
        })

        .controller("ScopeWithApply", function ($scope) {
            $scope.getMessage = function () {
                setTimeout(function () {
                    $scope.$apply(function () {
                        $scope.message = 'Fetched after 2 seconds';
                        console.log($scope.message);
                    });
                }, 2000);
            };

            $scope.getMessage();
        })

        .controller("CorrectWay", function ($scope, $timeout) {
            $scope.getMessage = function () {
                $timeout(function () {
                    $scope.message = 'Fetched after 1 second';
                    console.log($scope.message);
                }, 1000);
            };

            $scope.getMessage();
        });
})();