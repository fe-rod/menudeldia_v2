(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('menuCtrl', menu);

    menu.$inject = ['$scope', '$rootScope', '$stateParams', '$timeout', 'menuService', 'restaurantMenus'];

    function menu($scope, $rootScope, $stateParams, $timeout, menuService, restaurantMenus) {

        $scope.save = save;

        activate();

        function activate(){
            $rootScope.enabledStores = true;
            $rootScope.enabledMenu= true;
            $scope.loadingSave = false;
            loadMenu();
            debugger;
        }

        function loadMenu(){

            var menus  = [
                {
                    dayOfWeek: 1,
                    name: "Lunes",
                    menus: [],
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
                    menus: [],
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

            $scope.week = _.map(menus, function(item){

                var menusFromDay = _.where(restaurantMenus.menus,{dayOfWeek:item.dayOfWeek});
                if(menusFromDay.length)
                {debugger;
                    var menuFromDay = menusFromDay[0];

                    item.menus = menuFromDay.menus;

                    var cit = 3 - menuFromDay.menus.length;

                    for(var i=0; i < cit; i++){
                        item.menus.push(
                            {name: '', price: 0, description: ''}
                        );
                    }
                }
                else{
                    for(var i=0; i < 3; i++){
                        item.menus.push({name: '', price: 0, description: ''});
                    }
                }

                return item;
            });
        }

        function save(){
            $scope.loadingSave = true;
            menuService.addMenu(
                {
                    restaurantId:$stateParams.id,
                    menus:$scope.week
                }).then(
                function(){
                    $scope.loadingSave = false;
            });


            $timeout(function(){
                $scope.loadingSave = false;
            }, 3000)
        }

    }
})();

