(function (window, document, undefined) {
    'use strict';
    
    var quranApp = angular.module('quranApp', ['ngResource', 'ngRoute']);
    
    quranApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/surah-listing.html',
                controller: 'ListingCtrl'
            })
            .when('/verse', {
                templateUrl: 'partials/verse-view.html',
                controller: 'VerseCtrl'
            });
    });
    
}(window, document));