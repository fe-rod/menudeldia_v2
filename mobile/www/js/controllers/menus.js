angular.module('todayMenu')

    .controller('MenusCtrl', function($scope, $rootScope, $stateParams, Menus, $ionicPopover, $cordovaGeolocation, $ionicLoading) {
        const pageSize = 10;
        var pageCounter = 0;

        $rootScope.hideTabs = false;
        $rootScope.hideFilter = false;

        $scope.geolocError = false;

        $ionicLoading.show({delay: 200, template: "Cargando menús cercanos..."});

        var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 10000};

        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat  = position.coords.latitude
                var long = position.coords.longitude

                Menus.all(pageCounter,pageSize, lat, long).then(function(data){
                    $scope.menus = data;
                    $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    $ionicLoading.hide();
                },function(){
                    $ionicLoading.hide();
                });
            }, function(err) {
                //todo:mostrar mensaje indicando que no anda la geolocalizacion
                $scope.geolocError = true;
                $scope.gpsError = err.code + ' - ' + err.message;
                $ionicLoading.hide();
            });

        $scope.favorite = function(menu){
            menu.favorite = !menu.favorite;
        };

        $ionicPopover.fromTemplateUrl('templates/menus/filterPopover.html', function(popover) {
            $rootScope.popover = popover;
        });

        $scope.loadMore = function() {

            pageCounter = pageCounter + 1;
            Menus.all(pageCounter,10).then(
                function(data){
                    $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    if(data.length){
                        $scope.menus.push(data);
                        $scope.$broadcast('scroll.infiniteScrollComplete')
                    }
                }
            );
        };

        $scope.refreshMenu = function(){
            var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 10000};

            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    var lat  = position.coords.latitude
                    var long = position.coords.longitude

                    Menus.all(pageCounter,pageSize, lat, long).then(function(data){
                        $scope.menus = data;
                        $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    },function(){
                    });
                }, function(err) {
                    //todo:mostrar mensaje indicando que no anda la geolocalizacion
                    $scope.geolocError = true;
                    $scope.gpsError = err.code + ' - ' + err.message;
                })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
        }
    })
    .controller('MenuDetailCtrl', function($scope, $rootScope, $stateParams, Menus, data, $ionicLoading) {

        $scope.menu = data;
        $ionicLoading.hide();

        $rootScope.hideTabs = true;
        $rootScope.hideFilter = true;
    });


