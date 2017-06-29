;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['InsiderUser', 'ThirdPartyPost'];

    function DashboardCtrl(InsiderUser, ThirdPartyPost) {

        let vm = this;

        InsiderUser.getAll();
        ThirdPartyPost.getAll();
    }

})();
