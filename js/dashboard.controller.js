;(function(){
    angular
        .module("myApp")
        .controller("GrandFather", ['$scope', function(something) {
            something.userName = '';

            something.$watch('userName', function (newName) {
               if (newName.length > 10) {
                   alert('Your name is to long!');
               }
            });

            something.$on('message', function() {
                alert('Granny got it');
            });
        }])
        .controller("Father", function($scope) {
            $scope.run = function() {
                $scope.$broadcast('message');
            }
        })
        .controller("Son", function($scope) {
            $scope.$on('message', function() {
                alert('Son got it');
            });
        });
})();