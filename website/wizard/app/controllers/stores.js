(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('storesCtrl', stores);

    stores.$inject = ['$scope', '$timeout'];

    function stores($scope, $timeout) {

        $scope.stores = [];

        $scope.showForm = false;

        if($scope.stores.length == 0)
            $scope.showForm = true;

        $scope.addStore = function(){
            $scope.showForm = true;
        }

        $scope.days = [
            { name: 'Lunes', from: '', to:'', open: true},
            { name: 'Martes', from: '', to:'', open: true},
            { name: 'Miércoles', from: '', to:'', open: true},
            { name: 'Jueves', from: '', to:'', open: true},
            { name: 'Viernes', from: '', to:'', open: true},
            { name: 'Sábado', from: '', to:'', open: true},
            { name: 'Domingo', from: '', to:'', open: true}
        ];

        $scope.loadingSave = false;
        $scope.loadingNextStep = false;

        $scope.save = function(){
            $scope.loadingSave = true;
            $timeout(function(){
                $scope.loadingSave = false;
            }, 3000)
        }

        $scope.nextStep = function(){
            $scope.loadingNextStep = true;
            $timeout(function(){
                $scope.loadingNextStep = false;
            }, 3000)
        }

        $scope.toggleOpenDay = function(day){
            day.open = !day.open;
        }
    }
})();

