/*
This file define document schema for post
*/
'use strict'
let mongoose = require('mongoose')

// Create du schema Post
module.exports = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: true
}))
