/*
Create Angular module app.project and define all states
app.project : nested state of state app (see routes.js) is an abstrat state too with templateUrl
app.project.list : nested state of state app.project, display project-list component
app.project.item : nested state of state app.project, display project-item component with editable attribute value is true
*/
((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
        .state('app.project', {
            url: '',
            abstract: true,
            templateUrl: 'js/components/project/project.html'
        })
        .state('app.project.list', {
            url: '/',
            template: '<project-list></project-list>'
        })
        .state('app.project.item', {
            url: '/:id',
            template: '<project-item editable="true"></project-item>'
        })
    }])
})(require('angular').module('app.project', []))
