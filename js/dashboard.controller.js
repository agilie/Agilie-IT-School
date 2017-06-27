;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl($http, $rootScope) {

        let vm = this;

        vm.model = {
            userData: {},
            disabled: true
        };

        vm.menu = {
            updateUser: updateUser
        };

        activate();

        function activate() {
            $http.get('https://jsonplaceholder.typicode.com/users/1').then(response => vm.model.userData = response.data )
        }

        function updateUser() {
            $http.put('https://jsonplaceholder.typicode.com/users/1', vm.model.userData).then(response => {
                $rootScope.$emit('USER_DATA_UPDATED', {
                    name: vm.model.userData.name,
                    email: vm.model.userData.email
                })
            }).finally(() => vm.model.disabled = true);
        }

    }

})();
