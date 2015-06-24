(function () {
    'use strict';
    
    angular.module('quranApp').controller('VerseCtrl', ['$scope', '$resource', '$routeParams', 'ListingService', function ($scope, $resource, $routeParams, ListingService) {
        
        $scope.surah = ListingService.surah;
        // $scope.count = ListingService.surahNames().count;
        $scope.count = 1;
        $scope.apiKey = 'api_key';
        $scope.format = 'json';
        
        $scope.surahAPI = $resource('http://api.globalquran.com/complete/quran-simple', {
            callback: 'JSON_CALLBACK'
        }, {
            get: {
                method: 'GET'
            }
        });
        
        $scope.surahResult = $scope.surahAPI.get({
            key: $scope.apiKey,
            format: $scope.format
        });
    }]);
}());