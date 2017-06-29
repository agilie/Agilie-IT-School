angular
    .module("myApp")
    .factory("User", User);

User.$inject = [];

function User() {

    let user = {
        data: {
            email: 'sergey.mell@agilie.com'
        },
        avatarUrl: avatarUrl
    };
    
    function avatarUrl() {
        return null;
    }

    return user;
}
