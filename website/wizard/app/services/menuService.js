(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('menuService', menuService);

    menuService.$inject = ['$q', '$http'];

    function menuService($q, $http) {
        var service = {
            addMenu:addMenu,
            updateMenu:updateMenu,
            menus:menus
        };

        return service;

        function menus(id) {
            var deferred = $q.defer();

            //call webapi service
            $http.get('http://localhost:42479/api/site/menus/'+id)
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }

        function addMenu(menu) {
            var deferred = $q.defer();

            //call webapi service
            $http.post('http://localhost:42479/api/site/menu',menu)
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }

        function updateMenu(menu) {
            var deferred = $q.defer();

            //call webapi service
            $http.post('http://localhost:42479/api/site/updatemenu',menu)
                .success(function (data, status, headers, config) { deferred.resolve(data); })
                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });

            return deferred.promise;
        }
    }
})();