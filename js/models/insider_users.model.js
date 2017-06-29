angular
    .module("Insiders")
    .factory("InsiderUser", InsiderUser);

InsiderUser.$inject = ['$http'];

function InsiderUser($http) {

    let user = {
        getAll: getAll
    };
    
    function getAll() {
        return $http.get('https://jsonplaceholder.typicode.com/users')
    }

    return user;
}
