;(function () {

    "use strict";

    angular
        .module("myApp")
        .controller("DashboardCtrl", function ($scope) {

            $scope.$watch('userEmail', function (newName, oldName) {
                console.log('user is typing his email');
            });

            $scope.$watchGroup(['userName', 'userEmail'], function (newValues, oldValues) {
                console.log('user is typing something', newValues, oldValues);
            });
        });
})();