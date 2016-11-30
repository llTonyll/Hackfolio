((app) => {
    'use strict'
    app.component('projectItem', {
        bindings: {
            post: "<",
        },
        templateUrl: 'js/components/project/projectItem/projectItem.html',
        controller: ['ProjectsService', '$stateParams', '$state', '$http', function(ProjectsService, $stateParams, $state, $http) {

          $http.get("sites.json").then((read) => {
          this.projects = read.data
      })
        }]
    })
})(require('angular').module('app.project'))
