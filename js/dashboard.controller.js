;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['Post', '$timeout'];

    function DashboardCtrl(Post, $timeout) {

        let vm = this;

        Post.getAll();
        Post.getAll();
        Post.getAll();
        Post.getAll();
        Post.getAll();
        Post.getAll();

        $timeout(Post.getAll, 300);
    }

})();
