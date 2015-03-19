(function() {
    'use strict';

    angular
        .module("todayMenu")
        .filter('distance', distance);

    distance.$inject = [];

    function distance() {
        return function (value) {
            if(value >= 1000){
                var km = value / 1000;
                return parseFloat(km).toFixed(1) + ' km';
            }
            if(value)
                return parseInt(value).toString() + ' m';
            return '';
        };
    }

})();