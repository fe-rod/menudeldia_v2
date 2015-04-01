(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('configService', configService);

    configService.$inject = ['$q', '$http'];

    function configService($q, $http) {
        var service = {
            getTags: getTags
        };

        return service;

        function getTags() {
//            var deferred = $q.defer();
//
//            //call webapi service
//            $http.get('')
//                .success(function (data, status, headers, config) { deferred.resolve(data); })
//                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });
//
//            return deferred.promise;

            return [
                {id: "1", name: "Minutas", selected: false },
                {id: "2", name: "Milanesas", selected: false},
                {id: "3", name: "Wraps", selected: false},
                {id: "4", name: "Chivitos", selected: false},
                {id: "5", name: "Ensaladas", selected: false},
                {id: "6", name: "Tartas", selected: false},
                {id: "7", name: "Postres", selected: false},
                {id: "8", name: "Vegetariana", selected: false},
                {id: "9", name: "Pizza", selected: false},
                {id: "10", name: "Hamburguesas", selected: false},
                {id: "11", name: "Sushi", selected: false},
                {id: "12", name: "Helados", selected: false},
                {id: "13", name: "Thai", selected: false},
                {id: "14", name: "Comida china", selected: false},
            ];
        }
    }
})();