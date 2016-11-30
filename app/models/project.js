/*
This file define document schema for project
*/
'use strict'
let mongoose = require('mongoose')

// Create du schema Project
module.exports = mongoose.model('Project', new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
}))
