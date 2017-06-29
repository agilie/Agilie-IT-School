;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['Post'];

    function DashboardCtrl(Post) {

        let vm = this;

        Post.getAll();
    }

})();
