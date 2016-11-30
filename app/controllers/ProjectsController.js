/*
This file define controller for Project, this class extend from Controller class.
With this extended class, this class obtain all methodd from parent class
*/
'use strict'
// Require parent class
let Controller = require('./Controller');
// Require model (schema) use with this controller
const POST = require('../models/project')

class ProjectsController extends Controller {

    constructor() {
      // Call parent constructor with model param
      super(POST)
    }

}

module.exports = ProjectsController
