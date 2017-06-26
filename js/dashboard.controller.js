;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl() {

        let vm = this;

        //language=HTML
        let template = `
            <div style="color: red;">
                This is a potentially dangerous HTML content
                <em onmouseover="this.textContent='Gotcha!'">
                    Click Here
                </em>
            </div>`;

        vm.model = {
            message: 'Hello',
            name: 'World',
            template: template
        };


    }

})();