(function () {
    'use strict';

    angular
        .module('todayMenu')
        .factory('Menus', menus);

    menus.$inject = ['$q','$http'];

    function menus($q, $http) {
        var service = {
            all: all,
            get: get
        };
        return service;


        function all(start, length, latitude, longitude, radius) {
            var deferred = $q.defer();

            if(start == null && length == null)
                deferred.reject("Debe ingresar un valor de inincio y paginado");

            var url = "http://localhost:42479/api/menus";
            if (latitude != null && longitude != null && radius != null) {
                url += "/" + latitude + "/" + longitude + "/" + radius;
            }
            else if (latitude != null && longitude != null) {
                url += "/" + latitude + "/" + longitude;
            }

            url += "/" + start + "/" + length;

            //call webapi service
            $http.get(url)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        };

        function get(id) {
            var deferred = $q.defer();
            var url = "http://localhost:42479/api/menus/"+id;

            //call webapi service
            $http.get(url)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        };
    };
})();