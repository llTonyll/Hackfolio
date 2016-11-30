/*
This file define document schema for project
*/
'use strict'
let mongoose = require('mongoose')

// Create du schema Project
module.exports = mongoose.model('Project', new mongoose.Schema({
    name: {
        type: String
    },
    link: {
        type: String
    },
    author: {
        type: String
    },
    src: {
        type: String
    }
}, {
    timestamps: true
}))
