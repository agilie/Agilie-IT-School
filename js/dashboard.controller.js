;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['Post'];

    function DashboardCtrl(Post) {

        let vm = this;

        vm.model = {
            posts: Post.posts,
            newPost: {},
            inProgress: false
        };

        vm.menu = {
            addPost: addPost
        };

        activate();

        function activate() {
            // Post.getAll().then(
            //     (response) => vm.model.posts = response.data,
            //     (response) => console.log('Something bad happened: ' + response.data)
            // );
        }

        function addPost(event) {
            if (vm.model.inProgress) {
                return;
            }

            vm.model.inProgress = true;
            event.preventDefault();

            Post.create(vm.model.newPost)
                .then((response) => {
                    vm.model.posts = [vm.model.newPost, ...vm.model.posts];
                    vm.model.newPost = {};
                })
                .finally(() => vm.model.inProgress = false);
        }

    }
})();
