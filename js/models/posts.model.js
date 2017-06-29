angular
    .module("myApp")
    .factory("Post", Post);

Post.$inject = ['$http'];

function Post($http) {

    let post = {
        token: 'My Token',
        getAll: getAll
    };

    function getAll() {
        return $http.get('https://jsonplaceholder.typicode.com/posts')
    }

    return post;
}
