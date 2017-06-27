;(function() {
    "use strict";

    angular
        .module("myApp")
        .filter("cut", function() {
            return function(input, max) {

                if (input.length <= max) {
                    return input;
                } else {
                    return input.substr(0, max) + '...';
                }

            }
        });
})();
