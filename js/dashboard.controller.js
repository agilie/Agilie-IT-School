;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['User'];

    function DashboardCtrl(User) {

        let vm = this;

        vm.model = {
            userAvatar: User.avatarUrl(),
            message: 'Hello World'
        }
    }

})();
