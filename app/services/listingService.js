(function () {
    'use strict';
    
    angular.module('quranApp').service('ListingService', [function () {
        
        this.surah = '';
        
        this.surahNames = function () {
            var count, surahArr = [];
            
            Quran.init();
            
            for (count = 1; count <= 114; count += 1) {
                surahArr.push({
                    number: count,
                    englishName: Quran.surah.name(count, 'english_name'),
                    arabicName: Quran.surah.name(count, 'arabic_name')
                });
            }
            
            return surahArr;
        };
        
    }]);
}());