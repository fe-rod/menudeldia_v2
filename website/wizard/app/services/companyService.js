(function () {
    'use strict';

    angular
        .module('menudeldia')
        .factory('companyService', companyService);

    companyService.$inject = ['$q', '$http'];

    function companyService($q, $http) {
        var service = {
            getCompany: getCompany,
            getCompanyWithStores: getCompanyWithStores,
            getCompanyMenus: getCompanyMenus
        };

        return service;

        function getCompany(id) {
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
                tags: ['1', '2', '3', '5'],
                userName: '',
                password: '',
                image:''
            };
        }

        function getCompanyWithStores(id){
            return {
                name: 'Fanaticos',
                description: 'Los mejores wraps de pais y el mejore servicio.',
                url: 'www.fanaticos.com.uy',
                email: 'fanaticos@mail.com',
                phone: '27112523',
                tags: ['1', '2', '3', '5'],
                stores: [],
                image:''
            };
        }

        function getCompanyMenus(){
            return [
                {
                    dayOfWeek: 1,
                    name: "Lunes",
                    menus: [
                        {name: 'Carne al horno con tortilla de papas', price: '160', description: 'Colita de cuadril condimentada con tortilla de papas espanola'}
                    ],
                    isDayOpen: true
                },
                {
                    dayOfWeek: 2,
                    name: "Martes",
                    menus: [],
                    isDayOpen: true
                },
                {
                    dayOfWeek: 3,
                    name: "Miércoles",
                    menus: [
                        {name: 'Bondiola de cerdo con papas a la suiza', price: '175', description: ''},
                        {name: 'Pollo a la plancha con pure de calabza', price: '150', description: ''},
                        {name: 'Pescado a la crema con papas rusticas', price: '120', description: ''}
                    ],
                    isDayOpen: true
                },
                {
                    dayOfWeek: 4,
                    name: "Jueves",
                    menus: [],
                    isDayOpen: true
                },
                {
                    dayOfWeek: 5,
                    name: "Viernes",
                    menus: [],
                    isDayOpen: true
                },
                {
                    dayOfWeek: 6,
                    name: "Sábado",
                    menus: [],
                    isDayOpen: false
                },
                {
                    dayOfWeek: 7,
                    name: "Domingo",
                    menus: [],
                    isDayOpen: false
                }
            ];
        }
    }
})();