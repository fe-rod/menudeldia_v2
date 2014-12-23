(function () {
    'use strict';


angular
    .module('todayMenu')
    .factory('Stores',stores );

    stores.$inject = ['$q','$http'];

    function stores($q, $http) {

        var service = {
            all: all,
            getById: getById
        }

        return service;


        function all(start,length){
            var deferred = $q.defer();
            if(start == null && length == null)
                deferred.reject("Debe ingresar un valor de inincio y paginado");

            var url = "http://localhost:42479/api/restaurants/" + start + "/" + length;

            //call webapi service
            $http.get(url)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }

        function getById(id){
            var deferred = $q.defer();
            var url = "http://localhost:42479/api/restaurants/"+id;

            //call webapi service
            $http.get(url)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }
    }
})();