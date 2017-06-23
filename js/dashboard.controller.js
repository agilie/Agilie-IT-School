;(function(){
    angular
        .module("myApp")

        .controller("GrandFather", function($scope, $rootScope) {
            $scope.$on('message', function(event, data) {
                alert('Granny got message: ' + data);
            });
            $rootScope.$on('globalAlarm', function(event, data) {
                alert('Granny got message over rootScope: ' + data);
            });
        })

        .controller("Father", function($scope, $rootScope) {
            $scope.sendUp = function() {
                $scope.$emit('message', 'Stairway to Heaven');
            };

            $scope.sendDown = function() {
                $scope.$broadcast('message', 'Highway to Hell');
            };

            $scope.sendAll = function() {
                $rootScope.$emit('globalAlarm', 'Wake up!!!');
            };
        })

        .controller("Son", function($scope, $rootScope) {
            $scope.$on('message', function(event, data) {
                alert('Son got message: ' + data);
            });
            $rootScope.$on('globalAlarm', function(event, data) {
                alert('Son got message over rootScope: ' + data);
            });
        });
})();