;(function () {

    'use strict';

    angular
        .module("myApp", [])
        .constant("MD5", function(email) {
            return CryptoJS.MD5(email);
        })
        .config(['UserProvider', function(UserProvider) {
            UserProvider.setSize(50);
        }]);

})();

