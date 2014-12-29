angular.module('todayMenu')

    .controller('StoresCtrl', function($scope,$rootScope, Stores, $cordovaGeolocation, $ionicLoading) {
        const pageSize = 10;
        var pageCounter = 0;

        $rootScope.hideTabs = false;
        $rootScope.hideFilter = true;

        $ionicLoading.show({delay:200});

        var posOptions = {timeout: 30000, enableHighAccuracy: false};

        $cordovaGeolocation
            .getCurrentPosition(posOptions)
            .then(function (position) {
                var lat  = position.coords.latitude
                var long = position.coords.longitude

                Stores.all(pageCounter,pageSize, lat, long).then(function(data){
                    $scope.stores = processData(data);
                    $ionicLoading.hide();
                    $scope.moreDataCanBeLoaded = (data.length == pageSize);
                });
            }, function(err) {
                // error
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
            Menus.all(pageCounter,10).then(
                function(data){
                    $scope.moreDataCanBeLoaded = (data.length == pageSize);
                    if(data.length){
                        $scope.stores = $scope.stores.concat(data);
                        $scope.$broadcast('scroll.infiniteScrollComplete')
                    }
                }
            );
        };

    })

    .controller('StoreDetailCtrl', function($scope, $rootScope, $stateParams, Stores,data, $ionicLoading) {
        $rootScope.hideTabs = true;
        $rootScope.hideFilter = true;

        $ionicLoading.hide();

        data = _.extend(data, {
            tagsString: _.reduce(data.tags,function(mem,item){
                if(mem == "") { return item.name; }
                return mem + " - " + item.name;
            },"")
        });

        $scope.store = data;
        $scope.distanceAvailable = $stateParams.distance != 0;
        $scope.distanceTo = Math.ceil($stateParams.distance);
    });
