angular.module("menudeldia")
    .config(function ($stateProvider, $urlRouterProvider) {

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
            })

    });