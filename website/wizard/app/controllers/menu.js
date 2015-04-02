(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('menuCtrl', menu);

    menu.$inject = ['$scope', '$rootScope', 'companyService', '$timeout'];

    function menu($scope, $rootScope, companyService,$timeout) {

        $scope.save = save;

        activate();

        function activate(){
            $rootScope.enabledStores = true;
            $rootScope.enabledMenu= true;
            $scope.loadingSave = false;
            loadMenu();
        }

        function loadMenu(){

            var menus = companyService.getCompanyMenus();

            $scope.week = _.map(menus, function(item){

                var cit = 3 - item.menus.length;

                for(var i=0; i < cit; i++){
                    item.menus.push(
                        {name: '', price: '', description: ''}
                    );
                }

                return item;
            });
        }

        function save(){
            $scope.loadingSave = true;
            $timeout(function(){
                $scope.loadingSave = false;
            }, 3000)
        }

    }
})();

