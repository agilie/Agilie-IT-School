;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$http'];

    function DashboardCtrl($http) {

        let vm = this;

        vm.model = {
            posts: [],
            newPost: {},
            inProgress: false
        };

        vm.menu = {
            addPost: addPost
        };

        activate();

        function activate() {
            $http({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/posts"
            }).then(
                (response) => vm.model.posts = response.data,
                (response) => console.log('Something bad happened: ' + response.data)
            );
        }

        function addPost(event) {
            if (vm.model.inProgress) {
                return;
            }
            vm.model.inProgress = true;
            event.preventDefault();
            $http.post("https://jsonplaceholder.typicode.com/posts", vm.model.newPost)
                .then((response) => {
                    vm.model.posts = [vm.model.newPost, ...vm.model.posts];
                    vm.model.newPost = {};
                })
                .finally(() => vm.model.inProgress = false);
        }

    }
})();
