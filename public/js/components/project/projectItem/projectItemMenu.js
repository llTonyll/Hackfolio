/*
Create Angular component projectItemMenu into module app.project with databindings properties
- editMode : boolean to indicate if projectItem is in editMode or not
- onUndo : function
- onEdit : function
- onDelete : function
- onSave : function
*/
((app) => {
    'use strict'
    app.component('projectItemMenu', {
        bindings: {
            editMode: "=",
            onUndo: "&",
            onEdit: "&",
            onDelete: "&",
            onSave: "&"
        },
        templateUrl: 'js/components/project/projectItem/projectItemMenu.html'
    })
})(require('angular').module('app.project'))
