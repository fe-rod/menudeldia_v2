(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('authService', authService);

    authService.$inject = ['$q', '$http'];

    function authService($q, $http) {
        var service = {
            register: register
        };

        return service;

        function register(user) {
//            var deferred = $q.defer();
//
//            //call webapi service
//            $http.get('')
//                .success(function (data, status, headers, config) { deferred.resolve(data); })
//                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });
//
//            return deferred.promise;

        }
    }
})();