/*
Create Angular module app.blog and define all states
app.blog : nested state of state app (see routes.js) is an abstrat state too with templateUrl
app.blog.list : nested state of state app.blog, display blog-list component
app.blog.item : nested state of state app.blog, display blog-item component with editable attribute value is true
*/
((app) => {
    'use strict'
    app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        $stateProvider
        .state('app.blog', {
            url: '',
            abstract: true,
            templateUrl: 'js/components/blog/blog.html'
        })
        .state('app.blog.list', {
            url: '/',
            template: '<blog-list></blog-list>'
        })
        .state('app.blog.item', {
            url: '/:id',
            template: '<blog-item editable="true"></blog-item>'
        })
    }])
})(require('angular').module('app.blog', []))
