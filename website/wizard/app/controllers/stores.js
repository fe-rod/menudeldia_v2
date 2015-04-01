(function () {
    'use strict';

    angular
        .module('menudeldia')
        .controller('storesCtrl', stores);

    stores.$inject = ['$scope', '$state', '$stateParams', 'companyService', '$timeout', '$log'];

    function stores($scope, $state, $stateParams, companyService, $timeout,$log) {

        $scope.showStore = showStore;
        $scope.addStore = addStore;
        $scope.save = save;
        $scope.nextStep = nextStep;
        $scope.toggleOpenDay = toggleOpenDay;

        activate();

        function activate(){
            $scope.loadingSave = false;
            $scope.loadingNextStep = false;
            loadCompanyWithStores($stateParams.cId);
            initMap();
        }

        function loadCompanyWithStores(id){
            var company = $scope.company = companyService.getCompanyWithStores(id);
            //if company not found show error (404)
            //404

            $scope.stores = company.stores;

            $scope.showForm = false;
            if($scope.stores.length == 0) {
                $scope.showForm = true;
                $scope.store = newStore();
            }
        }

        function addStore() {
            $scope.store = newStore();
            $scope.showForm = true;
        }

        function showStore(store){
            $scope.showForm = true;
            $scope.store = {
                id: store.id,
                identifier: store.identifier,
                zone: store.zone,
                address: store.address,
                phone: store.phone,
                features: store.features,
                delivery: store.delivery,
                days : store.days,
                location: store.location
            };

            $scope.markerOn = true;
            $scope.marker = {
                id: 0,
                coords: {
                    latitude: store.location.latitude,
                    longitude: store.location.longitude
                },
                options: { draggable: true }
            };
        }

        function save(){
            $scope.loadingSave = true;
            $scope.store.location.latitude = $scope.marker.coords.latitude;
            $scope.store.location.longitude = $scope.marker.coords.longitude;
            $scope.stores.push($scope.store);
            $timeout(function(){
                $scope.loadingSave = false;
                $scope.showForm = false;

                //clear marker
                $scope.marker = null;
                $scope.markerOn = false;

            }, 3000)
        }

        function nextStep(){
            $scope.loadingNextStep = true;
            $timeout(function(){
                $state.go('menu');
                $scope.loadingNextStep = false;
            }, 3000)
        }

        function toggleOpenDay(day){
            day.open = !day.open;
        }

        function initMap(){
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
        }

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
                ],
                location: {
                    latitude: null,
                    longitude: null
                }
            };
        }
    }
})();

