;(function () {
    angular
        .module("myApp")
        .controller("DashboardCtrl", ['$scope', function (something) {

            something.message = 'I am a message from Scope';

        }])

        .controller("UserCtrl", UserCtrlFunction);

    UserCtrlFunction.$inject = ['$scope'];

    function UserCtrlFunction(thisShouldBeScope) {

        thisShouldBeScope.message = 'I am another message from Scope';
    }

})();