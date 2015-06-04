(function (window, document, undefined) {
    'use strict';
    
    angular
        .module('quranApp', ['ngResource', 'ngRoute'])
        .config(function ($routeProvider) {
        
            $routeProvider
                .when('/', {
                    templateUrl: '.partials/surah-listing.html',
                    controller: 'controllers/ListingCtrl'

                });

        });
    
}(window, document));