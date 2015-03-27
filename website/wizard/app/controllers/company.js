(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('companyCtrl', company);

    company.$inject = ['$scope', '$timeout'];

    function company($scope,$timeout) {
        $scope.tags = [
            {id: "1", name: "Minutas"},
            {id: "2", name: "Milanesas"},
            {id: "3", name: "Wraps"},
            {id: "4", name: "Chivitos"},
            {id: "5", name: "Ensaladas"},
            {id: "6", name: "Tartas"},
            {id: "7", name: "Postres"},
            {id: "8", name: "Vegetariana"},
            {id: "9", name: "Pizza"},
            {id: "10", name: "Hamburguesas"},
            {id: "11", name: "Sushi"},
            {id: "12", name: "Helados"},
            {id: "13", name: "Thai"},
            {id: "14", name: "Comida china"},
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
    }
})();

