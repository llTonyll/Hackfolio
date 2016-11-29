((app) => {
    'use strict'
    app.component("footer", {
        bindings: {
            ngModel: "=",
            user: '<'
        },
        templateUrl: 'js/components/common/footer.html',
        controller: function() {
            angular.extend(this, {

            })
        }
    })
})(angular.module('app.common'))
