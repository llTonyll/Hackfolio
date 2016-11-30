/*
<<<<<<< HEAD
Create Angular service ProjectsService in app.services module
=======
Create Angular service projectsService in app.services module
>>>>>>> c86bb1126845cdcdbf10b6bc031bdd1d1e3528a3
*/
((app) => {
    'use strict'
    app.service('ProjectsService', function($http) {
        return {
            get() {
                // HTTP Request method GET to our express API
                return $http.get('/api/projects')
            },
            getById(id) {
                // HTTP Request method GET with param (post id) to our express API
                return $http.get('/api/projects/' + id)
            },
            save(post) {
                if (post._id) {
                    // HTTP Request method PUT (update) with param and data (post) to our express API
                    return $http.put('/api/projects/' + post._id, post)
                } else {
                    // HTTP Request method POST (create) with data (post) to our express API
                    return $http.post('/api/projects', post)
                }
            },
            delete(post) {
                // HTTP Request method DELETE (delete) with param (post id) to our express API
                return $http.delete('/api/projects/' + post._id)
            }
        }
    })
})(require('angular').module('app.services'))
