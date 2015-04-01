(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('companyService', companyService);

    companyService.$inject = ['$q', '$http'];

    function companyService($q, $http) {
        var service = {
            getCompanyById: getCompanyById
        };

        return service;

        function getCompanyById(id) {
//            var deferred = $q.defer();
//
//            //call webapi service
//            $http.get('')
//                .success(function (data, status, headers, config) { deferred.resolve(data); })
//                .error(function (data, status, headers, config) { deferred.reject({ data: data, status: status }); });
//
//            return deferred.promise;

            return {
                name: 'Fanaticos',
                description: 'Los mejores wraps de pais y el mejore servicio.',
                url: 'www.fanaticos.com.uy',
                email: 'fanaticos@mail.com',
                phone: '27112523',
                tags: [],
                userName: '',
                password: '',
                image:''
            };
        }
    }
})();