(function () {
    'use strict';
    
    angular.module('quranApp').controller('ListingCtrl', ['$scope', '$resource', 'ListingService', function ($scope, $resource, ListingService) {
        
        $scope.surah = ListingService.surah;
        
        $scope.$watch('surah', function () {
            ListingService.surah = $scope.surah;
        });
        
        $scope.surahListing = ListingService.surahNames();
    }]);
}());