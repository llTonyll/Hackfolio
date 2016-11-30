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
            .state('app.projectItem', {
                url: '/',
                template: '<project-item></project-item>'
            })
            .state('app.projectList', {
                url: '/project/projectList',
                template: '<project-list></project-list>'
            })
    }])
})(require('angular').module('app.project', ['ui.router']))
