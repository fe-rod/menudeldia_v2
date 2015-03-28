(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('storesCtrl', stores);

    stores.$inject = ['$scope', '$timeout', '$log'];

    function stores($scope, $timeout,$log) {

        $scope.stores = [];
        $scope.store = {};

        $scope.showForm = false;
        if($scope.stores.length == 0)
            $scope.showForm = true;

        $scope.addStore = function(){
            $scope.store = newStore();
            $scope.showForm = true;
        }

        $scope.showStore = function(store){
            $scope.showForm = true;
            $scope.store = {
                id: store.id,
                identifier: store.identifier,
                zone: store.zone,
                address: store.address,
                phone: store.phone,
                features: store.features,
                delivery: store.delivery,
                days : store.days
            };
        }

        $scope.loadingSave = false;
        $scope.loadingNextStep = false;

        $scope.save = function(){
            $scope.loadingSave = true;
            $scope.stores.push($scope.store);
            $timeout(function(){
                $scope.loadingSave = false;
                $scope.showForm = false;
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

        $scope.map = {
            center: { latitude: -34.8976001, longitude: -56.1419506 },
            zoom: 13,
            events: {
                click: function (map, ev, ev2) {
                    $scope.$apply(function () {
                        $scope.mapInstance = map;
                        $scope.markerOn = true;
                        $scope.marker = {
                            id: 0,
                            coords: {
                                latitude: ev2[0].latLng.lat(),
                                longitude: ev2[0].latLng.lng()
                            },
                            options: { draggable: true }
                        };
                    });
                }
            }};

        function newStore(){
            return {
                identifier: '',
                zone: '',
                address: '',
                phone: '',
                features: '',
                delivery: true,
                days : [
                    { name: 'Lunes', from: '', to:'', open: true},
                    { name: 'Martes', from: '', to:'', open: true},
                    { name: 'Miércoles', from: '', to:'', open: true},
                    { name: 'Jueves', from: '', to:'', open: true},
                    { name: 'Viernes', from: '', to:'', open: true},
                    { name: 'Sábado', from: '', to:'', open: true},
                    { name: 'Domingo', from: '', to:'', open: true}
                ]
            };
        }
    }
})();

