/*
Create Angular component projectList into module app.project
*/
((app) => {
    'use strict'
    app.component('projectList', {
        templateUrl: 'js/components/project/projectList/projectList.html',
        controller: ['$http', function($http) {
            $http.get("/sites.json").then((read) => {
                this.sites = read.data
            })
            this.add = () => {
                this.sites.push(this.site);
            };
            this.delete = (index) => {
                this.sites.splice(index, 1);
            };
        }]
    })
})(require('angular').module('app.project'))
