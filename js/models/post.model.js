angular
    .module("myApp")
    .factory("Post", Post);

Post.$inject = ['$http'];

function Post($http) {

    let post = {
        posts: [],
        getAll: getAll,
        getOne: getOne,
        create: create
    };

    getAll().then(
        response => post.posts = response.data
    );

    function getAll() {
        return $http({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/posts"
        });
    }

    function getOne(postId) {
        return $http({
            method: "GET",
            url: `https://jsonplaceholder.typicode.com/posts/${postId}`
        });
    }

    function create(newPost) {
        return $http({
            method: "POST",
            url: `https://jsonplaceholder.typicode.com/posts/`,
            data: newPost
        });
    }

    return post;
}
