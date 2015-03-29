(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('menuCtrl', menu);

    menu.$inject = ['$scope'];

    function menu($scope) {

        //Cargar esto segun los dias que esta abierto el local
        $scope.week = [
            { name: "Lunes"},
            { name: "Martes"},
            { name: "Miercoles"},
            { name: "Jueves"},
            { name: "Viernes"},
            { name: "Sabado"},
            { name: "Domingo"}
        ];


    }
})();

