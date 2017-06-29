angular
    .module("myApp")
    .factory("Post", Post);

Post.$inject = ['$http'];

function Post($http) {

    let post = {
        getAll: getAll
    };

    function getAll() {
        return $http(
            {
                method: "GET",
                url: 'https://jsonplaceholder.typicode.com/posts'
            });
    }

    return post;
}
