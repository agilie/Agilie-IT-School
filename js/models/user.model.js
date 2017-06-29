angular
    .module("myApp")
    .provider("User", User);

User.$inject = ['MD5'];

function User(MD5) {

    let size = 20;

    let user = {
        data: {
            email: 'sergey.mell@agilie.com'
        },
        avatarUrl: avatarUrl
    };
    
    function avatarUrl() {
        return `https://www.gravatar.com/avatar/${MD5(user.data.email)}?s=${size}`;
    }

    function setSize(newSize) {
        size = newSize;
    }

    return {
        setSize: setSize,

        $get: function() {
            return user;
        }
    };
}
