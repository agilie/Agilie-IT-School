angular
    .module("ThirdParty")
    .factory("ThirdPartyPost", ThirdPartyPost);

ThirdPartyPost.$inject = ['$http'];

function ThirdPartyPost($http) {

    let post = {
        getAll: getAll
    };
    
    function getAll() {
        return $http.get('https://jsonplaceholder.typicode.com/posts')
    }

    return post;
}
