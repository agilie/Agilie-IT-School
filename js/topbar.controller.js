;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('TopbarCtrl', TopbarCtrl);

    function TopbarCtrl($http, $rootScope) {

        let vm = this;

        vm.model = {
            currentUser: {}
        };

        activate();

        function activate() {
            $http.get('https://jsonplaceholder.typicode.com/users/1').then(response => vm.model.currentUser = response.data )
        }

        $rootScope.$on('USER_DATA_UPDATED', (event, userData) => {
            vm.model.currentUser.name = userData.name;
            vm.model.currentUser.email = userData.email;
        })

    }

})();
