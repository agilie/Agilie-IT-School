;(function () {

    "use strict";

    angular
        .module("myApp", [])
        .config(function ($provide) {
            $provide.decorator('$http', function ($delegate) {

                let pendingRequests = {};

                function getRequestIdentifier(config) {
                    var str = config.method + config.url;
                    if (config.params && typeof config.params === 'object') {
                        str += angular.toJson(config.params);
                    }
                    if (config.data && typeof config.data === 'object') {
                        str += angular.toJson(config.data);
                    }
                    return str;
                }

                var $duplicateRequestsFilter = function (config) {

                    var identifier = getRequestIdentifier(config);

                    if (pendingRequests[identifier]) {
                        return pendingRequests[identifier];
                    }

                    pendingRequests[identifier] = $delegate(config).finally(function () {
                        delete pendingRequests[identifier];
                    });
                };

                return $duplicateRequestsFilter;
            });
        });

})();

