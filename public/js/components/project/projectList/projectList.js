/*
Create Angular component projectList into module app.project
*/
((app) => {
    'use strict'
    app.component('projectList', {
        templateUrl: 'js/components/project/projectList/projectList.html',
        controller: ['$scope', function($scope) {
            $scope.sites = [{
                'name': 'Google',
                'link': 'http://www.google.com',
                'author': 'Sundar Pichai',
                'src': 'https://blog.validately.com/wp-content/uploads/2015/03/Screen-Shot-2015-03-10-at-3.54.21-PM.png'
            }, {
                'name': 'Facebook',
                'link': 'http://www.facebook.com',
                'author': 'Marc Zuckerberg',
                'src': 'http://image.noelshack.com/fichiers/2016/48/1480491777-facebook.png'
            }, {
                'name': 'Twitter',
                'link': 'http://www.twitter.com/',
                'author': 'Jack Dorsey',
                'src': 'http://image.noelshack.com/fichiers/2016/48/1480491767-twitter.png'
            }, {
                'name': 'Tumblr',
                'link': 'http://www.tumblr.com/',
                'author': 'David Karp',
                'src': 'http://image.noelshack.com/fichiers/2016/48/1480491719-tumblr.png'
            }, {
                'name': 'Youtube',
                'link': 'http://www.youtube.com/',
                'author': 'Susan Wojcicki',
                'src': 'http://image.noelshack.com/fichiers/2016/48/1480491796-youtube.png'
            }, {
                'name': 'Dailymotion',
                'link': 'http://www.dailymotion.com/',
                'author': 'Maxime Saada',
                'src': 'http://image.noelshack.com/fichiers/2016/48/1480491782-dailymotion.png'
            }, {
                'name': 'Pole-emploi',
                'link': 'http://www.ghost.com/',
                'author': 'Jean Bassères',
                'src': 'http://www.pixbear.com/wp-content/uploads/2011/05/stupeflip_featured.jpg'
            }]
            this.delete = (index) => {
                this.posts.splice(index, 1);
            };
        }]
    })
})(require('angular').module('app.project'))
