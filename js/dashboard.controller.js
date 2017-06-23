;(function(){

    "use strict";

    angular
        .module("myApp")

        .controller("DashboardCtrl", function($scope) {

            $scope.message = 'Hello World';

            $scope.todos = {
                current: ['Task1', 'Task2', 'Task3'],
                delayed: ['Task4', 'Task5', 'Task6', 'Task7', 'Task8'],
                urgent: ['Task9', 'Task10', 'Task11', 'Task12']
            };

        })

        .controller("SomeOtherCtrl", function () {

            var vm = this;

            vm.message = 'Message From Some Other Controller';
        })
})();