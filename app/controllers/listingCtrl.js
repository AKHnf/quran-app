(function () {
    'use strict';
    
    angular.module('quranApp').controller('ListingCtrl', ['$scope', 'ListingService', function ($scope, ListingService) {
        
        $scope.surah = ListingService.surah;
        
        $scope.$watch('surah', function () {
            ListingService.surah = $scope.surah;
        });
    }]);
}());