((app) => {
    'use strict'
    app.component("navbar", {
        bindings: {
            ngModel: "=",
            user: '<'
        },
        templateUrl: 'js/components/common/navbar.html',
        controller: function() {
            angular.extend(this, {
                
            })
        }
    })
})(angular.module('app.common'))
