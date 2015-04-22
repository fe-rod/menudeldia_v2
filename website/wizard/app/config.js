angular.module("menudeldia")
    .config(function ($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

        $urlRouterProvider.otherwise('company');

        $stateProvider
            .state('company', {
                url: '/company?cId',
                templateUrl: 'app/templates/company.html',
                controller: 'companyCtrl'
            })
            .state('stores', {
                url: '/stores/:id',
                templateUrl: 'app/templates/stores.html',
                controller: 'storesCtrl',
                resolve: {
                    companyInfo: function($stateParams,companyService){
                        return companyService.getCompanyName($stateParams.id);
                    },
                    stores: function($stateParams,storesService){
                        return storesService.stores($stateParams.id);
                    }
                }
            })
            .state('menu', {
                url: '/menu/:id',
                templateUrl: 'app/templates/menu.html',
                controller: 'menuCtrl',
                resolve:{
                    restaurantMenus: function($stateParams,menuService){
                        return menuService.menus($stateParams.id);
                    }
                }
            });

        uiGmapGoogleMapApiProvider.configure({
            //    key: 'your api key',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });

    })
    .run(function ($rootScope) {
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
    });