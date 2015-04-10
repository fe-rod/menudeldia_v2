angular.module('todayMenu')

    .controller('StoresCtrl', function($scope,$rootScope, Stores, $cordovaGeolocation, $ionicLoading,$ionicPlatform) {
        const pageSize = 10;
        var pageCounter = 0;

        $rootScope.hideTabs = false;
        $rootScope.hideFilter = true;

        $ionicLoading.show({delay: 200, template: "Cargando locales cercanos..."});

        var latitude, longitude;

        var posOptions = {timeout: 30000, enableHighAccuracy: true, maximumAge: 10000};

        $ionicPlatform.ready(function(){
            $cordovaGeolocation
                .getCurrentPosition(posOptions)
                .then(function (position) {
                    latitude = position.coords.latitude;
                    longitude = position.coords.longitude;
                    Stores.all(pageCounter, pageSize, latitude, longitude).then(function (data) {
                        $scope.stores = processData(data);
                        $ionicLoading.hide();
                        $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    }, function () {
                        $ionicLoading.hide();
                    });

                }, function (err) {
                    $scope.geolocError = true;
                    //$scope.gpsError = err.code + ' - ' + err.message;
                    $ionicLoading.hide();
                });
        });

        function processData(data) {
            /*transformations*/
            var temp = data;
            temp = _.map(temp, function (obj) {
                obj = _.extend(obj, {
                    tagsString: _.reduce(obj.tags,function(mem,item){
                        if(mem == "") { return item.name; }
                        return mem + " - " + item.name;
                    },"")
                });
                return obj;
            });
            return temp;
        }



        $scope.loadMore = function() {
            pageCounter = pageCounter + 1;
            Menus.all(pageCounter,10, latitude, longitude).then(
                function(data){
                    $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    if(data.length){
                        $scope.stores= $scope.stores.concat(data);
                        $scope.$broadcast('scroll.infiniteScrollComplete')
                    }
                }
            );
        };

        $scope.refreshStores = function(){
            var posOptions = {timeout: 10000, enableHighAccuracy: true, maximumAge: 10000};
            pageCounter = 0;
            $ionicPlatform.ready(function() {
                $cordovaGeolocation
                    .getCurrentPosition(posOptions)
                    .then(function (position) {
                        latitude = position.coords.latitude
                        longitude = position.coords.longitude

                        Stores.all(pageCounter, pageSize, latitude, longitude).then(function (data) {
                            $scope.stores = processData(data);
                            $scope.moreDataCanBeLoaded = (data.length == pageSize);
                        }, function () {
                        });
                    }, function (err) {
                        $scope.geolocError = true;
                        $scope.gpsError = err.code + ' - ' + err.message;
                    })
                    .finally(function () {
                        // Stop the ion-refresher from spinning
                        $scope.$broadcast('scroll.refreshComplete');
                    });
            });
        }

    })

    .controller('StoreDetailCtrl', function($scope, $rootScope, $stateParams, Stores,data, $cordovaInAppBrowser) {
        $rootScope.hideTabs = true;
        $rootScope.hideFilter = true;

        data = _.extend(data, {
            tagsString: _.reduce(data.tags,function(mem,item){
                if(mem == "") { return item.name; }
                return mem + " - " + item.name;
            },"")
        });

        $scope.store = data;
        $scope.distanceAvailable = $stateParams.distance != 0;
        $scope.distanceTo = Math.ceil($stateParams.distance);

        $scope.openLink = function(link){
            var options = {
                location: 'yes'
            };
            $cordovaInAppBrowser.open(link, '_system', options)
                .then(function(event) {
                    // success
                })
                .catch(function(event) {
                    // error
                });

        }
    });
