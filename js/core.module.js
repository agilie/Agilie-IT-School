;(function () {

    "use strict";

    angular
        .module("myApp", [])
        .config(function ($httpProvider) {
            $httpProvider.defaults.headers.common['X-API-KEY'] = 'My secret api key';
            $httpProvider.interceptors.push('tokenSender');
        })
        .factory('tokenSender', function($injector) {
            return {
                request: function(config) {
                    config.headers['my-token'] = $injector.get('Post').token;
                    return config;
                },
                responseError: function(error) {
                    console.log('Error: ', error);
                }
            }
        });

})();

