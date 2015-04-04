angular.module('todayMenu')

    .controller('RestaurantsCtrl', function($scope,$rootScope, Stores, $ionicLoading) {
        const pageSize = 10;
        var pageCounter = 0;

        $rootScope.hideTabs = false;
        $rootScope.hideFilter = true;

        $ionicLoading.show({delay: 200});

        Stores.allRestaurants(pageCounter,pageSize).then(function(data){
            $scope.stores = processData(data);
            $ionicLoading.hide();
            $scope.moreDataCanBeLoaded = (data.length == pageSize);
        },function(){
            $ionicLoading.hide();
        });

        function processData(data) {
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
                        $scope.stores.push(data);
                        $scope.$broadcast('scroll.infiniteScrollComplete')
                    }
                }
            );
        };

        $scope.refreshRestaurants = function(){
            Stores.allRestaurants(pageCounter,pageSize).then(function(data){
                $scope.stores = processData(data);
                $scope.moreDataCanBeLoaded = (data.length == pageSize);
            },function(){
                $ionicLoading.hide();
            })
            .finally(function() {
                // Stop the ion-refresher from spinning
                $scope.$broadcast('scroll.refreshComplete');
            });
        }

    });
//
//    .controller('RestaurantDetailCtrl', function($scope, $rootScope, $stateParams, Stores,data, $ionicLoading) {
//        $rootScope.hideTabs = true;
//        $rootScope.hideFilter = true;
//
//        $ionicLoading.hide();
//
//        data = _.extend(data, {
//            tagsString: _.reduce(data.tags,function(mem,item){
//                if(mem == "") { return item.name; }
//                return mem + " - " + item.name;
//            },"")
//        });
//
//        $scope.store = data;
//    });
