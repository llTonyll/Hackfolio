/*
This file define all routes (API RESTFull) for project
*/
'use strict'
// Require controller used to communicate with database
let ProjectController = require('../controllers/projectController')

module.exports = (app) => {
    // Create new controller
    let ctrl = new ProjectController();

    //GET (for READ)  method
    app.get('/project', (req, res, next) => {
        return ctrl.find(req, res, next)
    })

    //GET (for READ) method with request params id
    app.get('/project/:id', (req, res, next) => {
        return ctrl.findById(req, res, next)
    })

    //POST (for CREATE) method
    app.post('/project', (req, res, next) => {
        return ctrl.create(req, res, next)
    })

    //PUT (for UPDATE) method with request params id
    app.put('/project/:id', (req, res, next) => {
        return ctrl.update(req, res, next)
    })

    //DELETE (for DELETE) method with request params id
    app.delete('/project/:id', (req, res, next) => {
        return ctrl.delete(req, res, next)
    })

}
