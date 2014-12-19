angular.module('todayMenu')

    .controller('StoresCtrl', function($scope,$rootScope, Stores) {
        $scope.stores = Stores.all();
        $rootScope.hideTabs = false;
        $rootScope.hideFilter = true;

        var options = {
            frequency : 1000,
            timeout : 30000,
            enableHighAccuracy: true
        };

//        $cordovaGeolocation
//            .getCurrentPosition(options)
//            .then(function (position) {
//                var lat  = position.coords.latitude
//                var long = position.coords.longitude
//
//                var myPos = new google.maps.LatLng(lat, long);
//
//                _.map($scope.stores, function(store){
//                    var myLatlng = new google.maps.LatLng(store.location.lat,store.location.long);
//                    var distance = google.maps.geometry.spherical.computeDistanceBetween(myLatlng, myPos);
//                    store.distanceTo = Math.ceil(distance);
//                });
//            }, function(err) {
//            });
    })

    .controller('StoreDetailCtrl', function($scope, $rootScope, $stateParams, Stores) {
        $rootScope.hideTabs = true;
        $rootScope.hideFilter = true;

        $scope.store = Stores.getById($stateParams.storeId);
        $scope.distanceAvailable = $stateParams.distance != 0;
        $scope.distanceTo = Math.ceil($stateParams.distance);
    });
