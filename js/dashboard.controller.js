;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl() {

        let vm = this;

        vm.model = {
            posts: [],
        };

        vm.menu = {
        };

        activate();

        function activate() {
        }

    }

})();
