/*
Create Angular component projectList into module app.project
*/
((app) => {
    'use strict'
    app.component('projectList', {
        templateUrl: 'js/components/project/projectList/projectList.html',
        controller:['$scope', function($scope) {
            $scope.sites = [{
                'name': 'Google',
                'link': 'http://www.google.com',
                'author': 'Jon Snow',
                'src': 'https://blog.validately.com/wp-content/uploads/2015/03/Screen-Shot-2015-03-10-at-3.54.21-PM.png'
            }, {
                'name': 'Facebook',
                'link': 'http://www.facebook.com',
                'author': 'Marc Zuckerberg',
                'src': 'http://1.bp.blogspot.com/-gW1ucleeuXI/T2n7kVs57cI/AAAAAAAABpA/bEIywU6kqBc/s1600/NewsFeed1.png'
            }, {
                'name': 'Metalorgie',
                'link': 'http://www.metalorgie.com/',
                'author': 'Lemmy Killimister',
                'src': 'http://www.pixbear.com/wp-content/uploads/2011/05/stupeflip_featured.jpg'
            }, {
                'name': 'NASA',
                'link': 'http://www.nasa.com/',
                'author': 'les teletubbies',
                'src': 'http://www.pixbear.com/wp-content/uploads/2011/05/stupeflip_featured.jpg'
            }, {
                'name': 'Ghost',
                'link': 'http://www.ghost.com/',
                'author': 'Ghost Rider',
                'src': 'http://www.pixbear.com/wp-content/uploads/2011/05/stupeflip_featured.jpg'
            }]
            this.add = () => {
                this.site.push(this.site);
            };
            this.delete = (index) => {
                this.site.splice(index, 1);
            };
        }]
    })
})(require('angular').module('app.project'))
