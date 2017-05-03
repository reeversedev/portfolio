/**
 * Created by ReeVerse on 27-04-2017.
 */
var app = angular.module('reeverse', []);

app.controller('navigationController', function ($scope) {
    $scope.navbar = {
        heading1: 'Prateek',
        heading2: 'Gogia',
        li: {
            category1: 'About',
            category2: 'Projects',
            category3: 'Medium',
            category4: 'GitHub',
            category5: 'LinkedIn',
            category6: 'Twitter'
        },
        note: {
            line1: 'Thanks for stopping by. This website is actually under construction but I really appreciate your action to visit this page and I promise to deploy the latest version as soon as possible.',
            line2: 'By the way, you can tweet me or add me in your LinkedIn, maybe we can work together?',
            line3: 'Sincerely,',
            line4: 'Prateek Gogia'
        }
    }
});
app.controller('aboutController', function ($scope) {
    $scope.img = {
        
    }
})