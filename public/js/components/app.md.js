((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider

        .state('app.common', {
            url: '/',
            templateUrl: 'js/components/app.html',
        })
    }])
})(require('angular').module('app.myapp', []))
