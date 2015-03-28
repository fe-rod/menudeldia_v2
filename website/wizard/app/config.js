angular.module("menudeldia")
    .config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

        $urlRouterProvider.otherwise('company');

        $stateProvider
            .state('company', {
                url: '/company',
                templateUrl: 'app/templates/company.html',
                controller: 'companyCtrl'
            })
            .state('stores', {
                url: '/stores',
                templateUrl: 'app/templates/stores.html',
                controller: 'storesCtrl'
            })
            .state('menu', {
                url: '/menu',
                templateUrl: 'app/templates/menu.html',
                controller: 'menuCtrl'
            });

        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });

    });